import _ from 'lodash';
import { FETCH_FRIEND_POSTS } from '../../actions/posts/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FRIEND_POSTS:
      return {
        ..._.mapKeys(action.payload, 'id'),
      };
    default:
      return state;
  }
};
