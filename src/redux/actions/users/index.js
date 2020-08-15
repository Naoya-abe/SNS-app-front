import { createUserAPI, fetchUserAPI } from '../../../api/users';

import { CREATE_USER, FETCH_USER } from './types';

import history from '../../../history';
import paths from '../../../config/paths';

export const createUser = (data) => async (dispatch) => {
  try {
    const response = await createUserAPI(data);
    dispatch({ type: CREATE_USER, payload: response.data });
    history.push(paths.signin.main);
  } catch (err) {
    throw err;
  }
};

export const fetchUser = (token) => async (dispatch) => {
  try {
    const response = await fetchUserAPI(token);
    dispatch({ type: FETCH_USER, payload: response.data });
  } catch (err) {
    throw err;
  }
};
