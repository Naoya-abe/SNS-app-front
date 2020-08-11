import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PostDetail from '../../pages/Post/PostDetail';
import PostDelete from '../../pages/Post/PostDelete';
import PostEdit from '../../pages/Post/PostEdit';

const PostRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/posts/detail/:id' component={PostDetail} />
        <Route exact path='/posts/delete/:id' component={PostDelete} />
        <Route exact path='/posts/edit/:id' component={PostEdit} />
        <Redirect exact from='/posts' to='/home' />
      </Switch>
    </React.Fragment>
  );
};

export default PostRoutes;
