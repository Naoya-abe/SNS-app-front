import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Button } from '@material-ui/core';
import { createFollow, editFollower } from '../../redux/actions/friends';

const AcceptButton = (props) => {
  // const { askTo, cookies, createFollow, editFollower, follow } = props;
  const { requestId, askFrom, cookies, createFollow, editFollower } = props;
  const token = cookies.get('current-token');
  // const [followed, setfollowed] = useState(false);

  // useEffect(() => {
  //   setfollowed(follow[askTo] ? true : false);
  // }, [follow, askTo]);

  const handleAccept = () => {
    try {
      console.log('accept');
      const params = { approved: true };
      editFollower(token, requestId, params);
      const createParams = { askTo: askFrom, approved: true };
      createFollow(token, createParams);
    } catch (err) {
      console.log(err);
    }
  };

  // const handleFollowDelete = () => {
  //   try {
  //     const approvalId = follow[askTo].id;
  //     deleteFollow(token, approvalId, askTo);
  //     setfollowed(false);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <div className='friend-accept-button'>
      {/* {followed ? (
        <Button variant='outlined' color='default' onClick={handleFollowDelete}>
          Followed
        </Button>
      ) : ( */}
      <Button variant='outlined' color='primary' onClick={handleAccept}>
        Follow
      </Button>
      {/* )} */}
    </div>
  );
};

const cookieAcceptButton = withCookies(AcceptButton);

// const mapStateToProps = (state) => {
//   return {
//     follow: state.follow,
//   };
// };

export default connect(null, {
  createFollow,
  editFollower,
})(cookieAcceptButton);
