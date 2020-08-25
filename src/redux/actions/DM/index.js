import { createDMAPI, fetchDMAPI, fetchDMsAPI } from '../../../api/DM';

import { CREATE_DM, FETCH_DM, FETCH_DMS } from './types';

import history from '../../../history';
import paths from '../../../config/paths';

export const createDM = (token, params) => async (dispatch) => {
  try {
    const response = await createDMAPI(token, params);
    dispatch({ type: CREATE_DM, payload: response.data });
    history.push(paths.home.main);
  } catch (err) {
    throw err;
  }
};

export const fetchDM = (token) => async (dispatch) => {
  try {
    const response = await fetchDMAPI(token);
    dispatch({ type: FETCH_DM, payload: response.data });
  } catch (err) {
    throw err;
  }
};

export const fetchDMs = (token) => async (dispatch) => {
  try {
    const response = await fetchDMsAPI(token);
    dispatch({ type: FETCH_DMS, payload: response.data });
  } catch (err) {
    throw err;
  }
};
