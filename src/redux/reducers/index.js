import { combineReducers } from 'redux';

import userReducer from './users';
import postReducer from './posts';
import userPostReducer from './posts/userPosts';
import followReducer from './friends';

export default combineReducers({
  user: userReducer,
  posts: postReducer,
  userPosts: userPostReducer,
  follow: followReducer,
});
