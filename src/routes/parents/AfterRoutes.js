import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Home from '../../pages/Home';
import SidebarColumn from '../../components/SidebarColumn';
import '../../styles/routes/parents/AfterRoutes.scss';
import ApiContextProvider from '../../context/ApiContext';

const AfterRoutes = () => {
  return (
    <ApiContextProvider>
      <div className='after-routes'>
        <Navbar />
        <Route exact path='/home' component={Home} />
        <Route />
        <Redirect exact='/' to='/home' />
        <SidebarColumn />
      </div>
    </ApiContextProvider>
  );
};

export default AfterRoutes;
