import _ from 'lodash';
import {
  CREATE_FOLLOW,
  FETCH_FOLLOW,
  //   FETCH_FRIEND,
  //   FETCH_FRIENDS,
  DELETE_FOLLOW,
} from '../../actions/friends/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_FOLLOW:
      return { ...state, [action.payload.askTo]: action.payload };
    case FETCH_FOLLOW:
      return {
        ..._.mapKeys(action.payload, 'askTo'),
      };
    // case FETCH_POST:
    //   return { ...state, [action.payload.id]: action.payload };

    case DELETE_FOLLOW:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
