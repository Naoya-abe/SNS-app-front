import React from 'react';
import { Divider } from '@material-ui/core';

import PostCreate from '../components/Posts/PostCreate';
import PostList from '../components/Posts/PostList';

import '../styles/components/Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <h3>HOME</h3>
      <Divider />
      <PostCreate />
      <Divider className='home-divider' />
      <PostList />
    </div>
  );
};

export default Home;
