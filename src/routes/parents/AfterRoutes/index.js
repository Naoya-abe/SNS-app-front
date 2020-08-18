import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Home from '../../../pages/Home';
import SidebarColumn from '../../../components/SidebarColumn';
import PostRoutes from '../../children/PostRoutes';
import ProfileRoutes from '../../children/ProfileRoutes';
import DMRoutes from '../../children/DMRoutes';
import { fetchUser } from '../../../redux/actions/users';
import { fetchFollowFriend } from '../../../redux/actions/friends';

import '../../../styles/routes/parents/AfterRoutes.scss';

const AfterRoutes = (props) => {
  const { token, fetchUser, fetchFollowFriend } = props;
  useEffect(() => {
    (async () => {
      try {
        await fetchUser(token);
        await fetchFollowFriend(token);
      } catch (err) {
        console.log(err);
      }
    })();
  });

  return (
    <div className='after-routes'>
      <Navbar />
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route path='/posts' component={PostRoutes} />
        <Route path='/profiles' component={ProfileRoutes} />
        <Route path='/dm' component={DMRoutes} />
        <Redirect exact from='/' to='/home' />
      </Switch>
      <SidebarColumn />
    </div>
  );
};

export default connect(null, { fetchUser, fetchFollowFriend })(AfterRoutes);
