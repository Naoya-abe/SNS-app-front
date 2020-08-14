import React, { useState, useEffect, useContext } from 'react';
import { withCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ApiContext } from '../../context/ApiContext';
import PostItem from '../../components/Posts/PostItem';

import '../../styles/pages/Post/PostDetail.scss';

const PostDetail = (ownProps) => {
  const [post, setPost] = useState({});
  const token = ownProps.cookies.get('current-token');
  const { profile } = useContext(ApiContext);
  const userProfile = profile[0];
  const postId = ownProps.match.params.id;

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
    <div className='post-detail'>
      <h3>Post Detail</h3>
      <Divider />
      {post.id ? (
        userProfile.id === post.postFrom.id ? (
          // aがTrue、bもTrue
          <React.Fragment>
            <PostItem
              avatar={post.postFrom.avatar}
              displayName={post.postFrom.displayName}
              content={post.content}
            />
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
          </React.Fragment>
        ) : (
          // aがTrue、bがFalse
          <PostItem
            avatar={post.postFrom.avatar}
            displayName={post.postFrom.displayName}
            content={post.content}
          />
        )
      ) : (
        // aがfalse
        <CircularProgress size={25} color='secondary' />
      )}
    </div>
  );
};

export default withCookies(PostDetail);
