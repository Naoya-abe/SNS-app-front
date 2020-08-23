import { combineReducers } from 'redux';

import userReducer from './users';
import otherReducer from './users/others';
import postReducer from './posts';
import userPostReducer from './posts/userPosts';
import friendPostReducer from './posts/friendPosts';
import followReducer from './friends/follow';
import followerReducer from './friends/follower';
import friendReducer from './friends';

export default combineReducers({
  user: userReducer,
  users: otherReducer,
  posts: postReducer,
  userPosts: userPostReducer,
  friendPosts: friendPostReducer,
  follow: followReducer,
  follower: followerReducer,
  friends: friendReducer,
});
