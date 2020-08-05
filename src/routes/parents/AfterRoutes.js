import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import App from '../../components/App';

const AfterRoutes = () => {
  return (
    <React.Fragment>
      <Route exact path='/home' component={App} />
      <Route />
      <Redirect exact='/' to='/home' />
    </React.Fragment>
  );
};

export default AfterRoutes;
