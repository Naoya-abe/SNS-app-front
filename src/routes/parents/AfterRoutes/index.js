import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Navbar from '../../../components/Navbar';
import Home from '../../../pages/Home';
import SidebarColumn from '../../../components/SidebarColumn';
import ApiContextProvider from '../../../context/ApiContext';
import PostRoutes from '../../children/PostRoutes';

import '../../../styles/routes/parents/AfterRoutes.scss';

const afterRoutes = () => {
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

export default afterRoutes;
