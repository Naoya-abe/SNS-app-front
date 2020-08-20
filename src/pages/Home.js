import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Divider } from '@material-ui/core';
import { fetchPosts } from '../redux/actions/posts';
import { fetchFollow, fetchFollower } from '../redux/actions/friends';
import PostCreate from '../components/Posts/PostCreate';
import PostList from '../components/Posts/PostList';

import '../styles/components/Home.scss';

const Home = (props) => {
  const { fetchPosts, userProfile, posts, fetchFollow, fetchFollower } = props;
  const token = props.cookies.get('current-token');
  useEffect(() => {
    (async () => {
      try {
        await fetchPosts(token);
        await fetchFollow(token);
        await fetchFollower(token);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [fetchFollow, fetchFollower, fetchPosts, token]);

  return (
    <div className='home'>
      <h3>HOME</h3>
      <Divider />
      <PostCreate userProfile={userProfile} token={token} />
      <Divider className='home-divider' />
      <PostList userProfile={userProfile} posts={posts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userProfile: state.user,
    posts: Object.values(state.posts),
    follow: state.follow,
  };
};

const cookieHome = withCookies(Home);

export default connect(mapStateToProps, {
  fetchPosts,
  fetchFollow,
  fetchFollower,
})(cookieHome);
