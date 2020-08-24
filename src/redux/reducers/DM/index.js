import _ from 'lodash';
import { CREATE_DM, FETCH_DM, FETCH_DMS } from '../../actions/DM/types';

export default (state = {}, action) => {
  switch (action.type) {
    // case CREATE_DM:
    //   return { ...state, [action.payload.id]: action.payload };
    // case FETCH_DM:
    //   return { ...state, [action.payload.id]: action.payload };
    case FETCH_DMS:
      return {
        ..._.mapKeys(action.payload, 'id'),
      };
    default:
      return state;
  }
};
