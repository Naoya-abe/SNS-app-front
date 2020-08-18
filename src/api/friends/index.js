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

export const fetchFollowFriendsAPI = async (token) => {
  try {
    const response = await base.get('api/user/follow-list/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};
