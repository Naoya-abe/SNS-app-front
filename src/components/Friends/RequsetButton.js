import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Button } from '@material-ui/core';
import { createFriend } from '../../redux/actions/friends';

const RequsetButton = (props) => {
  const { askFrom, askTo, cookies, createFriend, follow } = props;
  const token = cookies.get('current-token');

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
    // try {
    //   const params = { askTo: askTo, approved: false };
    //   createFriend(token, params);
    // } catch (err) {
    //   console.log(err);
    // }
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

const cookieRequsetButton = withCookies(RequsetButton);

const mapStateToProps = (state) => {
  return {
    follow: state.follow,
  };
};

export default connect(mapStateToProps, { createFriend })(cookieRequsetButton);
