import {
  createFollowAPI,
  fetchFollowAPI,
  fetchFollowerAPI,
  editFollowerAPI,
  fetchFriendsAPI,
  // editFriendAPI,
  deleteFollowAPI,
  // fetchUserFriendsAPI,
} from '../../../api/friends';

import {
  CREATE_FOLLOW,
  FETCH_FOLLOW,
  FETCH_FOLLOWER,
  EDIT_FOLLOWER,
  FETCH_FRIENDS,
  //   EDIT_FRIEND,
  DELETE_FOLLOW,
  //   FETCH_USER_FRIENDS,
} from './types';

import history from '../../../history';
import paths from '../../../config/paths';

export const createFollow = (token, params) => async (dispatch) => {
  try {
    const response = await createFollowAPI(token, params);
    dispatch({ type: CREATE_FOLLOW, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const fetchFollow = (token) => async (dispatch) => {
  try {
    const response = await fetchFollowAPI(token);
    dispatch({ type: FETCH_FOLLOW, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const fetchFollower = (token) => async (dispatch) => {
  try {
    const response = await fetchFollowerAPI(token);
    dispatch({ type: FETCH_FOLLOWER, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const editFollower = (token, requestId, params) => async (dispatch) => {
  try {
    const response = await editFollowerAPI(token, requestId, params);
    dispatch({ type: EDIT_FOLLOWER, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const deleteFollow = (token, approvalId, askTo) => async (dispatch) => {
  try {
    await deleteFollowAPI(token, approvalId);
    dispatch({ type: DELETE_FOLLOW, payload: askTo });
  } catch (err) {
    throw err;
  }
};

export const fetchFriends = (token) => async (dispatch) => {
  try {
    const response = await fetchFriendsAPI(token);
    dispatch({ type: FETCH_FRIENDS, payload: response.data });
  } catch (err) {
    throw err;
  }
};
