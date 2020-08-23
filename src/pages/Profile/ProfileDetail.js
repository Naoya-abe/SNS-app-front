import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserHeader from '../../components/UserHeader';

const ProfileDetail = () => {
  return (
    <div className='profile-detail'>
      <h3>Profile Detail</h3>
      <Divider />
      {/* <div className='my-profile-user-header'>
        <UserHeader
          about={profile.about}
          avatar={profile.avatar}
          displayName={profile.displayName}
          detail
        />
      </div> */}
      )}
    </div>
  );
};

const cookieProfileDetail = withCookies(ProfileDetail);

const mapStateToProps = (state) => {
  return { userProfile: state.user };
};

export default connect(mapStateToProps, null)(cookieProfileDetail);
