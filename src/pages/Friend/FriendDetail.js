import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Divider } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import UserHeader from '../../components/UserHeader';
import '../../styles/pages/Friend/FriendDetail.scss';
import { fetchFriendPosts } from '../../redux/actions/posts';

const FriendDetail = (props) => {
  const { userProfile, cookies, match, fetchFriendPosts } = props;
  const friendId = match.params.id;
  const token = cookies.get('current-token');
  useEffect(() => {
    (async () => {
      try {
        await fetchFriendPosts(token, friendId);
      } catch (err) {
        console.log(err);
      }
    })();
  });
  return userProfile ? (
    <div className='friend-detail'>
      <h3>Friend Detail</h3>
      <Divider />
      <div className='friend-detail-header'>
        <UserHeader
          about={userProfile.about}
          avatar={userProfile.avatar}
          displayName={userProfile.displayName}
          detail
        />
      </div>
    </div>
  ) : null;
};

const cookieFriendDetail = withCookies(FriendDetail);

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.id;
  return { userProfile: state.users[userId] };
};

export default connect(mapStateToProps, { fetchFriendPosts })(
  cookieFriendDetail
);
