import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Button } from '@material-ui/core';
import { createFollow, deleteFollow } from '../../redux/actions/friends';

const AcceptButton = (props) => {
  const { askTo, cookies, createFollow, deleteFollow, follow } = props;
  const token = cookies.get('current-token');
  const [followed, setfollowed] = useState(false);

  useEffect(() => {
    setfollowed(follow[askTo] ? true : false);
  }, [follow, askTo]);

  const handleFollowRequest = () => {
    try {
      const params = { askTo: askTo, approved: false };
      createFollow(token, params);
      setfollowed(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFollowDelete = () => {
    try {
      const approvalId = follow[askTo].id;
      deleteFollow(token, approvalId, askTo);
      setfollowed(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='friend-accept-button'>
      {followed ? (
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

const cookieAcceptButton = withCookies(AcceptButton);

const mapStateToProps = (state) => {
  return {
    follow: state.follow,
  };
};

export default connect(mapStateToProps, {
  createFollow,
  deleteFollow,
})(cookieAcceptButton);
