import React, { useState, useEffect, useContext } from 'react';
import { withCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import { Divider } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ApiContext } from '../../context/ApiContext';
import ImageAvatar from '../../components/ImageAvatar';
import history from '../../history';

import '../../styles/pages/Post/PostEdit.scss';

const PostEdit = (ownProps) => {
  const [post, setPost] = useState({});
  const token = ownProps.cookies.get('current-token');
  const { register, handleSubmit } = useForm();
  const { profile, putPost } = useContext(ApiContext);
  const userProfile = profile[0];
  const postId = ownProps.match.params.id;
  const handleEdit = (data, e) => {
    const params = { ...data, postFromId: userProfile.id };
    putPost(params, postId);
    // DBの内容変更前にページ遷移しちゃうので修正する
    history.push(`/posts/detail/${postId}`);
  };
  const handleCancel = () => {
    history.goBack();
  };
  useEffect(() => {
    const getPost = async (id) => {
      try {
        const res = await axios.get(`http://localhost:8080/api/post/${id}`, {
          headers: { Authorization: `Token ${token}` },
        });
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPost(postId);
  }, [ownProps.match.params.id, postId, token]);
  return (
    <div className='edit-post'>
      <h3>Post Edit</h3>
      <Divider />
      {post.id ? (
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

export default withCookies(PostEdit);
