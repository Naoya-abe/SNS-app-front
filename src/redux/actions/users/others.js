import { fetchUsersAPI } from '../../../api/users';
import { FETCH_USERS } from './types';

import history from '../../../history';
import paths from '../../../config/paths';

export const fetchUsers = () => async (dispatch) => {
  try {
    const response = await fetchUsersAPI();
    dispatch({ type: FETCH_USERS, payload: response.data });
  } catch (err) {
    throw err;
  }
};
