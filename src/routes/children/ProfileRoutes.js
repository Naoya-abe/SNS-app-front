import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ProfileDetail from '../../pages/Profile/ProfileDetail';
import MyProfile from '../../pages/Profile/MyProfile';
import MyProfileDelete from '../../pages/Profile/MyProfileDelete';
import MyProfileEdit from '../../pages/Profile/MyProfileEdit';
import MyAvatarEdit from '../../pages/Profile/MyAvatarEdit';
import paths from '../../config/paths';

const ProfileRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.profiles.detail} component={ProfileDetail} />
        <Route
          exact
          path={paths.profiles.myprofile.main}
          component={MyProfile}
        />
        <Route
          exact
          path={paths.profiles.myprofile.delete}
          component={MyProfileDelete}
        />
        <Route
          exact
          path={paths.profiles.myprofile.edit}
          component={MyProfileEdit}
        />
        <Route
          exact
          path={paths.profiles.myprofile.avatar}
          component={MyAvatarEdit}
        />
        <Redirect exact from='/profiles' to='/home' />
      </Switch>
    </React.Fragment>
  );
};

export default ProfileRoutes;
