import {
  createFriendAPI,
  // fetchFriendAPI,
  // fetchFriendsAPI,
  // editFriendAPI,
  // deleteFriendAPI,
  // fetchUserFriendsAPI,
} from '../../../api/friends';

import {
  CREATE_FRIEND,
  //   FETCH_FRIEND,
  //   FETCH_FRIENDS,
  //   EDIT_FRIEND,
  //   DELETE_FRIEND,
  //   FETCH_USER_FRIENDS,
} from './types';

import history from '../../../history';
import paths from '../../../config/paths';

export const createFriend = (token, params) => async (dispatch) => {
  try {
    const response = await createFriendAPI(token, params);
    dispatch({ type: CREATE_FRIEND, payload: response.data });
  } catch (err) {
    throw err;
  }
};

// export const fetchPost = (token, postId) => async (dispatch) => {
//   try {
//     const response = await fetchPostAPI(token, postId);
//     dispatch({ type: FETCH_POST, payload: response.data });
//   } catch (err) {
//     throw err;
//   }
// };

// export const fetchPosts = (token) => async (dispatch) => {
//   try {
//     const response = await fetchPostsAPI(token);
//     dispatch({ type: FETCH_POSTS, payload: response.data });
//   } catch (err) {
//     throw err;
//   }
// };

// export const editPost = (token, postId, params) => async (dispatch) => {
//   try {
//     const response = await editPostAPI(token, postId, params);
//     dispatch({ type: EDIT_POST, payload: response.data });
//     history.push(`/posts/detail/${postId}`);
//   } catch (err) {
//     throw err;
//   }
// };

// export const deletePost = (token, postId) => async (dispatch) => {
//   try {
//     const response = await deletePostAPI(token, postId);
//     dispatch({ type: DELETE_POST, payload: response.data });
//     history.push(paths.home.main);
//   } catch (err) {
//     throw err;
//   }
// };

// export const fetchUserPosts = (token) => async (dispatch) => {
//   try {
//     const response = await fetchUserPostsAPI(token);
//     dispatch({ type: FETCH_USER_POSTS, payload: response.data });
//   } catch (err) {
//     throw err;
//   }
// };
