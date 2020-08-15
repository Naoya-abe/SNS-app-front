import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchPost } from '../../redux/actions/posts';
import PostItem from '../../components/Posts/PostItem';
import '../../styles/pages/Post/PostDetail.scss';

const PostDetail = (props) => {
  const { userProfile, post, match, cookies, fetchPost } = props;
  const token = cookies.get('current-token');
  const postId = match.params.id;

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
    <div className='post-detail'>
      <h3>Post Detail</h3>
      <Divider />
      {post && (
        <React.Fragment>
          <PostItem
            avatar={post.postFrom.avatar}
            displayName={post.postFrom.displayName}
            content={post.content}
          />
          {userProfile && userProfile.id === post.postFrom.id ? (
            <div className='button-container'>
              <Link to={`/posts/edit/${postId}`}>
                <Button variant='outlined' color='primary'>
                  Edit
                </Button>
              </Link>
              <Link to={`/posts/delete/${postId}`}>
                <Button variant='outlined' color='secondary'>
                  Delete
                </Button>
              </Link>
            </div>
          ) : null}
        </React.Fragment>
      )}
    </div>
  );
};

const cookiePostDetail = withCookies(PostDetail);

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.id;
  return { userProfile: state.user, post: state.posts[postId] };
};

export default connect(mapStateToProps, { fetchPost })(cookiePostDetail);
