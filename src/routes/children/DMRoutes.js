import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import paths from '../../config/paths';
import DMCreate from '../../pages/DM/DMCreate';

const DMRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.dm.create} component={DMCreate} />

        <Redirect exact from='/dm' to='/home' />
      </Switch>
    </React.Fragment>
  );
};

export default DMRoutes;
