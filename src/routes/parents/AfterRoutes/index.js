import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Home from '../../../pages/Home';
import SidebarColumn from '../../../components/SidebarColumn';
import ApiContextProvider from '../../../context/ApiContext';
import PostRoutes from '../../children/PostRoutes';
import { fetchUser } from '../../../redux/actions/users';

import '../../../styles/routes/parents/AfterRoutes.scss';

const AfterRoutes = (props) => {
  const { token, fetchUser } = props;
  useEffect(() => {
    (async () => {
      try {
        await fetchUser(token);
      } catch (err) {
        console.log(err);
      }
    })();
  });

  return (
    <ApiContextProvider>
      <div className='after-routes'>
        <Navbar />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route path='/posts' component={PostRoutes} />
          <Redirect exact from='/' to='/home' />
        </Switch>
        <SidebarColumn />
      </div>
    </ApiContextProvider>
  );
};

export default connect(null, { fetchUser })(AfterRoutes);
