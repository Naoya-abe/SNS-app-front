import {
  createPostAPI,
  fetchPostAPI,
  fetchPostsAPI,
  editPostAPI,
  deletePostAPI,
  fetchUserPostsAPI,
  fetchFriendPostsAPI,
} from '../../../api/posts';

import {
  CREATE_POST,
  FETCH_POST,
  FETCH_POSTS,
  EDIT_POST,
  DELETE_POST,
  FETCH_USER_POSTS,
  FETCH_FRIEND_POSTS,
} from './types';

import history from '../../../history';
import paths from '../../../config/paths';

export const createPost = (token, params) => async (dispatch) => {
  try {
    const response = await createPostAPI(token, params);
    dispatch({ type: CREATE_POST, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const fetchPost = (token, postId) => async (dispatch) => {
  try {
    const response = await fetchPostAPI(token, postId);
    dispatch({ type: FETCH_POST, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const fetchPosts = (token) => async (dispatch) => {
  try {
    const response = await fetchPostsAPI(token);
    dispatch({ type: FETCH_POSTS, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const fetchFriendPosts = (token, friendId) => async (dispatch) => {
  try {
    const response = await fetchFriendPostsAPI(token, friendId);
    dispatch({ type: FETCH_FRIEND_POSTS, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const editPost = (token, postId, params) => async (dispatch) => {
  try {
    const response = await editPostAPI(token, postId, params);
    dispatch({ type: EDIT_POST, payload: response.data });
    history.push(`/posts/detail/${postId}`);
  } catch (err) {
    throw err;
  }
};

export const deletePost = (token, postId) => async (dispatch) => {
  try {
    const response = await deletePostAPI(token, postId);
    dispatch({ type: DELETE_POST, payload: response.data });
    history.push(paths.home.main);
  } catch (err) {
    throw err;
  }
};

export const fetchUserPosts = (token) => async (dispatch) => {
  try {
    const response = await fetchUserPostsAPI(token);
    dispatch({ type: FETCH_USER_POSTS, payload: response.data });
  } catch (err) {
    throw err;
  }
};
