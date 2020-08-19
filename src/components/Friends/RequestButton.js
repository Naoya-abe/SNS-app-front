import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Button } from '@material-ui/core';
import {
  createFriend,
  fetchFollowFriend,
  deleteFriend,
} from '../../redux/actions/friends';

const RequestButton = (props) => {
  const {
    askFrom,
    askTo,
    cookies,
    createFriend,
    fetchFollowFriend,
    deleteFriend,
    follow,
  } = props;
  const token = cookies.get('current-token');
  const [followed, setfollowed] = useState(false);

  const handleFollowRequest = () => {
    console.log(`${askFrom}----->${askTo}`);
    try {
      const params = { askTo: askTo, approved: false };
      createFriend(token, params);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFollowDelete = () => {
    console.log('followDelete');
    try {
      const approvalId = follow[askTo].id;
      deleteFriend(token, approvalId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='friend-request-button'>
      {follow[askTo] ? (
        <Button variant='outlined' color='default' onClick={handleFollowDelete}>
          Followed
        </Button>
      ) : (
        <Button
          variant='outlined'
          color='primary'
          onClick={handleFollowRequest}
        >
          Follow
        </Button>
      )}
    </div>
  );
};

const cookieRequestButton = withCookies(RequestButton);

const mapStateToProps = (state) => {
  return {
    follow: state.follow,
  };
};

export default connect(mapStateToProps, {
  createFriend,
  fetchFollowFriend,
  deleteFriend,
})(cookieRequestButton);
