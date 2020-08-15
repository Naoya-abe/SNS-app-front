import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchPost, editPost } from '../../redux/actions/posts';
import ImageAvatar from '../../components/ImageAvatar';
import history from '../../history';

import '../../styles/pages/Post/PostEdit.scss';

const PostEdit = (props) => {
  const { register, handleSubmit } = useForm();
  const { userProfile, post, match, cookies, fetchPost, editPost } = props;
  const token = cookies.get('current-token');
  const postId = match.params.id;
  const handleEdit = (data) => {
    const params = { ...data, postFromId: userProfile.id };
    editPost(token, postId, params);
    console.log(data);
  };
  const handleCancel = () => {
    history.goBack();
  };
  useEffect(() => {
    (async () => {
      try {
        fetchPost(token, postId);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [fetchPost, postId, token]);
  return (
    <div className='edit-post'>
      <h3>Post Edit</h3>
      <Divider />
      {post ? (
        <form onSubmit={handleSubmit(handleEdit)} className='edit-post-form'>
          {userProfile && (
            <ImageAvatar alt='User avatar' src={userProfile.avatar} />
          )}
          <div className='edit-post-content'>
            <textarea
              name='content'
              ref={register({
                required: {
                  value: true,
                  message: 'Please enter post contents.',
                },
                maxLength: {
                  value: 140,
                  message: 'Please enter within 140 letters',
                },
              })}
              placeholder={post.content}
            />
            <div className='button-container'>
              <Button variant='outlined' color='primary' type='submit'>
                Edit
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                onClick={handleCancel}
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <CircularProgress size={25} color='secondary' />
      )}
    </div>
  );
};

const cookiesPostEdit = withCookies(PostEdit);

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  return { userProfile: state.user, post: state.posts[postId] };
};

export default connect(mapStateToProps, { fetchPost, editPost })(
  cookiesPostEdit
);
