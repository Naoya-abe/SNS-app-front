import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PostDetail from '../../pages/Post/PostDetail';
import PostDelete from '../../pages/Post/PostDelete';
import PostEdit from '../../pages/Post/PostEdit';
import paths from '../../config/paths';

const PostRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={paths.posts.delete} component={PostDelete} />
        <Route exact path={paths.posts.detail} component={PostDetail} />
        <Route exact path={paths.posts.edit} component={PostEdit} />
        <Redirect exact from='/posts' to='/home' />
      </Switch>
    </React.Fragment>
  );
};

export default PostRoutes;
