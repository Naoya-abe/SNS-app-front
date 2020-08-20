import base from '../base';

export const createFollowAPI = async (token, params) => {
  try {
    const response = await base.post('api/user/approval/', params, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchFollowAPI = async (token) => {
  try {
    const response = await base.get('api/user/follow-list/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const editFollowerAPI = async (token, requestId, params) => {
  try {
    const response = await base.patch(
      `api/user/approval/${requestId}/`,
      params,
      {
        headers: { Authorization: `Token ${token}` },
      }
    );
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchFollowerAPI = async (token) => {
  try {
    const response = await base.get('api/user/follower-list/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const deleteFollowAPI = async (token, approvalId) => {
  try {
    const response = await base.delete(`api/user/approval/${approvalId}`, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};
