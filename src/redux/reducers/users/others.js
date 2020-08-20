import _ from 'lodash';
import { FETCH_USERS } from '../../actions/users/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ..._.mapKeys(action.payload, 'id'),
      };
    default:
      return state;
  }
};
