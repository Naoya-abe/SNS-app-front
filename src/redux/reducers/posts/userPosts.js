import _ from 'lodash';
import { FETCH_USER_POSTS } from '../../actions/posts/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return {
        ..._.mapKeys(action.payload, 'id'),
      };
    default:
      return state;
  }
};
