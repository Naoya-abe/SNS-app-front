import _ from 'lodash';
import {
  CREATE_FRIEND,
  //   FETCH_FRIEND,
  //   FETCH_FRIENDS,
  //   EDIT_FRIEND,
  //   DELETE_FRIEND,
} from '../../actions/friends/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_FRIEND:
      return { ...state, [action.payload.askFrom]: action.payload };
    // case FETCH_POSTS:
    //   return {
    //     ..._.mapKeys(action.payload, 'id'),
    //   };
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
