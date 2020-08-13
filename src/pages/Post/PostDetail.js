import React, { useState, useEffect } from 'react';
import { withCookies } from 'react-cookie';
import axios from 'axios';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PostItem from '../../components/Posts/PostItem';

const PostDetail = (ownProps) => {
  const [post, setPost] = useState({});
  const token = ownProps.cookies.get('current-token');

  useEffect(() => {
    const postId = ownProps.match.params.id;
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
  }, [ownProps.match.params.id, token]);
  console.log(post);
  return (
    <div className='post-detail'>
      <h3>Post Detail</h3>
      <Divider />
      {post.id ? (
        <PostItem
          avatar={post.postFrom.avatar}
          displayName={post.postFrom.displayName}
          content={post.content}
        />
      ) : null}

      <div className='button-container'>
        <Button variant='outlined' color='primary'>
          Edit
        </Button>
        <Button variant='outlined' color='primary'>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default withCookies(PostDetail);
