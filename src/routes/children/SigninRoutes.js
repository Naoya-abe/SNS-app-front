import React from 'react';
import { Switch, Route } from 'react-router-dom';
import paths from '../../config/paths';
import Signin from '../../pages/Signin';

const SigninRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.signin.main} component={Signin} />
      </Switch>
    </React.Fragment>
  );
};

export default SigninRoutes;
