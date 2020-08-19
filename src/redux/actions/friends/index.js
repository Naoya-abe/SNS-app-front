import {
  createFriendAPI,
  fetchFollowFriendsAPI,
  // fetchFriendsAPI,
  // editFriendAPI,
  deleteFriendAPI,
  // fetchUserFriendsAPI,
} from '../../../api/friends';

import {
  CREATE_FRIEND,
  FETCH_FOLLOW_FRIENDS,
  //   FETCH_FRIENDS,
  //   EDIT_FRIEND,
  DELETE_FRIEND,
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

export const fetchFollowFriend = (token) => async (dispatch) => {
  try {
    const response = await fetchFollowFriendsAPI(token);
    dispatch({ type: FETCH_FOLLOW_FRIENDS, payload: response.data });
  } catch (err) {
    throw err;
  }
};

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

export const deleteFriend = (token, approvalId, askTo) => async (dispatch) => {
  try {
    await deleteFriendAPI(token, approvalId);
    dispatch({ type: DELETE_FRIEND, payload: askTo });
  } catch (err) {
    throw err;
  }
};

// export const fetchUserPosts = (token) => async (dispatch) => {
//   try {
//     const response = await fetchUserPostsAPI(token);
//     dispatch({ type: FETCH_USER_POSTS, payload: response.data });
//   } catch (err) {
//     throw err;
//   }
// };
