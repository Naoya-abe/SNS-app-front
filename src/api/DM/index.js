import base from '../base';

export const createDMAPI = async (token, params) => {
  try {
    const response = await base.post('api/dm/message/', params, {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

// 使ってない
export const fetchDMAPI = async (token) => {
  try {
    const response = await base.get('api/user/follow-list/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchDMsAPI = async (token) => {
  try {
    const response = await base.get('api/dm/inbox/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};
