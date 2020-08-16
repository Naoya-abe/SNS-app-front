import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserHeader from '../../components/UserHeader';
import paths from '../../config/paths';

const MyProfile = (props) => {
  const { userProfile } = props;
  return (
    <div className='my-profile-detail'>
      <h3>My Profile</h3>
      <Divider />
      <UserHeader
        // about={userProfile.about}
        about={'aaaaaaaaaaaaaaaaaaaaaaaaaaaa'}
        avatar={userProfile.avatar}
        displayName={userProfile.displayName}
        detail
      />
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
      {/* {post && (
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
            </React.Fragment> */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { userProfile: state.user };
};

export default connect(mapStateToProps, null)(MyProfile);
