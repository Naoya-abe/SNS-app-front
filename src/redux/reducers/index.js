import { combineReducers } from 'redux';

import userReducer from './users';
import postReducer from './posts';
import userPostReducer from './posts/userPosts';

export default combineReducers({
  user: userReducer,
  posts: postReducer,
  userPosts: userPostReducer,
});
