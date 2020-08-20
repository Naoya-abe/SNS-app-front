import { combineReducers } from 'redux';

import userReducer from './users';
import otherReducer from './users/others';
import postReducer from './posts';
import userPostReducer from './posts/userPosts';
import followReducer from './friends/follow';
import followerReducer from './friends/follower';

export default combineReducers({
  user: userReducer,
  users: otherReducer,
  posts: postReducer,
  userPosts: userPostReducer,
  follow: followReducer,
  follower: followerReducer,
});
