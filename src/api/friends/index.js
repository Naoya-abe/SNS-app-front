import base from '../base';

export const createFriendAPI = async (token, params) => {
  try {
    const response = await base.post('api/user/approval/', params, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};
