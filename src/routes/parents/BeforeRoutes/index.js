import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Signin from '../../../pages/Signin';
import Signup from '../../../pages/Signup';

const beforeRoutes = () => {
  return (
    <React.Fragment>
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <Redirect exact='/' to='/signin' />
    </React.Fragment>
  );
};

export default beforeRoutes;
