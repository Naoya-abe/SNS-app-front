import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import paths from '../../config/paths';
import FriendList from '../../pages/Friend/FriendList';
import FriendDetail from '../../pages/Friend/FriendDetail';

const DMRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.friends.list} component={FriendList} />
        <Route exact path={paths.friends.detail} component={FriendDetail} />
      </Switch>
    </React.Fragment>
  );
};

export default DMRoutes;
