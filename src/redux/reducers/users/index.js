import {
  CREATE_USER,
  FETCH_USER,
  PATCH_USER,
  EDIT_USER,
  DELETE_USER,
} from '../../actions/users/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...action.payload };
    case FETCH_USER:
      // 配列をオブジェクトに変換
      return Object.assign({}, ...action.payload);
    case PATCH_USER:
      return { ...state, ...action.payload };
    case EDIT_USER:
      return { ...action.payload };
    case DELETE_USER:
      return { ...action.payload };
    default:
      return state;
  }
};
