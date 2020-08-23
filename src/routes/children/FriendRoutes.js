import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import paths from '../../config/paths';
import FriendList from '../../pages/Friend/FriendList';

const DMRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.friends.main} component={FriendList} />
      </Switch>
    </React.Fragment>
  );
};

export default DMRoutes;
