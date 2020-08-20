import _ from 'lodash';
import {
  //   CREATE_FOLLOW,
  FETCH_FOLLOWER,
  EDIT_FOLLOWER,
  //   FETCH_FRIEND,
  //   FETCH_FRIENDS,
  //   EDIT_FRIEND,
  //   DELETE_FOLLOW,
} from '../../actions/friends/types';

export default (state = {}, action) => {
  switch (action.type) {
    // case CREATE_FOLLOW:
    //   return { ...state, [action.payload.askTo]: action.payload };
    case FETCH_FOLLOWER:
      return {
        ..._.mapKeys(action.payload, 'askFrom'),
      };
    case EDIT_FOLLOWER:
      return { ...state, [action.payload.askFrom]: action.payload };
    // case FETCH_POST:
    //   return { ...state, [action.payload.id]: action.payload };
    // case EDIT_POST:
    //   return { ...state, [action.payload.id]: action.payload };
    // case DELETE_FOLLOW:
    //   return _.omit(state, action.payload);
    default:
      return state;
  }
};
