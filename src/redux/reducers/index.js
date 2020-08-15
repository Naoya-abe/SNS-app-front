import { combineReducers } from 'redux';

import userReducer from './users';
// import postReducer from './posts';

export default combineReducers({
  user: userReducer,
  //   posts: postReducer,
});
