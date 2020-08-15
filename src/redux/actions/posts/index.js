import { createPostAPI, fetchPostAPI, fetchPostsAPI } from '../../../api/posts';

import {
  CREATE_POST,
  FETCH_POST,
  FETCH_POSTS,
  EDIT_POST,
  DELETE_POST,
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

export const fetchPost = (token) => async (dispatch) => {
  try {
    const response = await fetchPostAPI(token);
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
