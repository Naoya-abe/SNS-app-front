import React from 'react';
import { Switch, Route } from 'react-router-dom';
import paths from '../../config/paths';
import Signup from '../../pages/Signup';

const SignupRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.signup.main} component={Signup} />
      </Switch>
    </React.Fragment>
  );
};

export default SignupRoutes;
