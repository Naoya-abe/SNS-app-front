import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Button } from '@material-ui/core';
import { createFriend } from '../../redux/actions/friends';

const RequsetButton = (props) => {
  const { askFrom, askTo, cookies, createFriend } = props;
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
  return (
    <div className='friend-request-button'>
      <Button variant='outlined' color='primary' onClick={handleFollowRequest}>
        Follow
      </Button>
      {/* <Button variant='outlined' color='default'>
        pending
      </Button> */}
    </div>
  );
};

const cookieRequsetButton = withCookies(RequsetButton);

export default connect(null, { createFriend })(cookieRequsetButton);
