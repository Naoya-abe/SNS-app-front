import base from '../base';

export const createPostAPI = async (token) => {
  try {
    const response = await base.get('api/post/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const fetchPostAPI = async (token) => {
  try {
    const response = await base.get('api/post/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const fetchPostsAPI = async (token) => {
  try {
    const response = await base.get('api/post/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    console.log(err);
  }
};
