import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Divider } from '@material-ui/core';
import { fetchPosts } from '../redux/actions/posts';
import PostCreate from '../components/Posts/PostCreate';
import PostList from '../components/Posts/PostList';

import '../styles/components/Home.scss';

const Home = (props) => {
  const { fetchPosts, posts } = props;
  const token = props.cookies.get('current-token');
  useEffect(() => {
    (async () => {
      try {
        await fetchPosts(token);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [fetchPosts, token]);

  return (
    <div className='home'>
      <h3>HOME</h3>
      <Divider />
      {/* <PostCreate profile={profile} createPost={createPost} /> */}
      <Divider className='home-divider' />
      <PostList posts={posts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.posts),
  };
};

const cookieHome = withCookies(Home);

export default connect(mapStateToProps, { fetchPosts })(cookieHome);
