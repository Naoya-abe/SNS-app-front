import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Home from '../../pages/Home';

import '../../styles/routes/parents/AfterRoutes.scss';
import SidebarColumn from '../../components/SidebarColumn';

const AfterRoutes = () => {
  return (
    <div className='after-routes'>
      <Navbar />
      <Route exact path='/home' component={Home} />
      <Route />
      <Redirect exact='/' to='/home' />
      <SidebarColumn />
    </div>
  );
};

export default AfterRoutes;
