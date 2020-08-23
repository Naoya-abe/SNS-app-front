import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import FirendItem from '../../components/Friends/FirendItem';
import '../../styles/pages/Friend/FriendList.scss';

const FriendList = (props) => {
  const { users, friends } = props;

  return (
    <div className='friend-list'>
      <h3>Friend List</h3>
      <Divider />
      <div className='scroll-list'>
        {friends.map((friend) => {
          const friendId = friend.askTo;
          const friendProfile = users[friendId];
          return (
            <React.Fragment key={friendProfile.id}>
              <Link to={`/friends/${friendId}`}>
                <FirendItem profile={friendProfile} />
              </Link>
              <Divider />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    friends: Object.values(state.friends),
  };
};

export default connect(mapStateToProps, null)(FriendList);
