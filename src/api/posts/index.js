import base from '../base';

export const createPostAPI = async (token, params) => {
  try {
    const response = await base.post('api/post/', params, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchPostAPI = async (token) => {
  try {
    const response = await base.get('api/post/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchPostsAPI = async (token) => {
  try {
    const response = await base.get('api/post/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};
