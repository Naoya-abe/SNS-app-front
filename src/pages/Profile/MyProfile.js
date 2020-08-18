import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchUserPosts } from '../../redux/actions/posts';
import UserHeader from '../../components/UserHeader';
import paths from '../../config/paths';
import PostList from '../../components/Posts/PostList';

import '../../styles/pages/Profile/MyProfile.scss';

const MyProfile = (props) => {
  const { userProfile, fetchUserPosts, cookies, userPosts } = props;
  const token = cookies.get('current-token');

  useEffect(() => {
    ((async) => {
      try {
        fetchUserPosts(token);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [fetchUserPosts, token]);

  return (
    <div className='my-profile'>
      <h3>My Profile</h3>
      <Divider />
      <div className='my-profile-user-header'>
        <UserHeader
          about={userProfile.about}
          avatar={userProfile.avatar}
          displayName={userProfile.displayName}
          detail
        />
      </div>

      <div className='button-container'>
        <Link to={paths.profiles.myprofile.edit}>
          <Button variant='outlined' color='primary'>
            Edit
          </Button>
        </Link>
        <Link to={paths.profiles.myprofile.delete}>
          <Button variant='outlined' color='secondary'>
            Delete
          </Button>
        </Link>
      </div>
      <Divider className='home-divider' />
      <PostList userProfile={userProfile} posts={userPosts} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userProfile: state.user, userPosts: Object.values(state.userPosts) };
};

const cookieMyProfile = withCookies(MyProfile);

export default connect(mapStateToProps, { fetchUserPosts })(cookieMyProfile);
