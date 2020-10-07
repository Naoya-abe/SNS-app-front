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

export const fetchPostAPI = async (token, postId) => {
  try {
    const response = await base.get(`api/post/${postId}/`, {
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

export const editPostAPI = async (token, postId, params) => {
  try {
    const response = await base.put(`api/post/${postId}/`, params, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const deletePostAPI = async (token, postId) => {
  try {
    const response = await base.delete(`api/post/${postId}/`, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchUserPostsAPI = async (token) => {
  try {
    const response = await base.get('api/post/myposts/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchFriendPostsAPI = async (token, friendId) => {
  try {
    const response = await base.get('api/post/friend-posts/', {
      params: { friendId },
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};
