import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Home from '../../../pages/Home';
import SidebarColumn from '../../../components/SidebarColumn';
import PostRoutes from '../../children/PostRoutes';
import ProfileRoutes from '../../children/ProfileRoutes';
import DMRoutes from '../../children/DMRoutes';
import FriendRoutes from '../../children/FriendRoutes';
import { fetchUser } from '../../../redux/actions/users';
import { fetchUsers } from '../../../redux/actions/users/others';
import {
  fetchFriends,
  fetchFollow,
  fetchFollower,
} from '../../../redux/actions/friends';
import { fetchDMs } from '../../../redux/actions/DM';

import '../../../styles/routes/parents/AfterRoutes.scss';

const AfterRoutes = (props) => {
  const {
    token,
    fetchUser,
    fetchUsers,
    fetchFriends,
    fetchDMs,
    fetchFollow,
    fetchFollower,
  } = props;
  useEffect(() => {
    (async () => {
      try {
        await fetchUser(token);
        await fetchUsers();
        await fetchFriends(token);
        await fetchDMs(token);
        await fetchFollow(token);
        await fetchFollower(token);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [
    fetchDMs,
    fetchFollow,
    fetchFollower,
    fetchFriends,
    fetchUser,
    fetchUsers,
    token,
  ]);

  return (
    <div className='after-routes'>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/posts' component={PostRoutes} />
        <Route path='/profiles' component={ProfileRoutes} />
        <Route path='/dm' component={DMRoutes} />
        <Route path='/friends' component={FriendRoutes} />
        <Redirect exact from='/' to='/home' />
      </Switch>
      <SidebarColumn />
    </div>
  );
};

export default connect(null, {
  fetchUser,
  fetchUsers,
  fetchFriends,
  fetchDMs,
  fetchFollow,
  fetchFollower,
})(AfterRoutes);
