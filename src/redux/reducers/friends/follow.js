import _ from 'lodash';
import {
  FETCH_FOLLOW_FRIENDS,
  //   FETCH_FRIEND,
  //   FETCH_FRIENDS,
  //   EDIT_FRIEND,
  //   DELETE_FRIEND,
} from '../../actions/friends/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FOLLOW_FRIENDS:
      return {
        ..._.mapKeys(action.payload, 'askTo'),
      };
    // case FETCH_POST:
    //   return { ...state, [action.payload.id]: action.payload };
    // case EDIT_POST:
    //   return { ...state, [action.payload.id]: action.payload };
    // case DELETE_POST:
    //   console.log(action.payload);
    //   return _.omit(state, action.payload);
    default:
      return state;
  }
};
