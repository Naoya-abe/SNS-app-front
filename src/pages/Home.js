import React, { useEffect, useContext } from 'react';
import { ApiContext } from '../context/ApiContext';
import { Divider } from '@material-ui/core';
import PostCreate from '../components/Posts/PostCreate';
import PostList from '../components/Posts/PostList';

import '../styles/components/Home.scss';

const Home = () => {
  const { profile, posts, createPost, getPosts } = useContext(ApiContext);

  useEffect(() => {
    // 無限ループの修正
    if (posts.length === 0) {
      getPosts();
    }
  }, [getPosts, posts]);

  return (
    <div className='home'>
      <h3>HOME</h3>
      <Divider />
      <PostCreate profile={profile} createPost={createPost} />
      <Divider className='home-divider' />
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
