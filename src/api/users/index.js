import base from '../base';

export const createUserAPI = async (data) => {
  try {
    const params = {
      email: data.email,
      password: data.password,
      displayName: data.displayName,
    };
    const response = await base.post('api/user/profiles/', params);
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchUserTokenAPI = async (data) => {
  try {
    const { email, password } = data;
    const params = {
      username: email,
      password,
    };
    const response = await base.post('authen/', params);
    return response.data;
  } catch (err) {
    throw err;
  }
};

export const fetchMyProfileAPI = async (token) => {};

export const fetchUserAPI = async (token) => {
  try {
    const response = await base.get('api/user/myprofile/', {
      headers: { Authorization: `Token ${token}` },
    });
    return response;
  } catch (err) {
    throw err;
  }
};

// export const fetchUserAPI = async (token) => {
//   try {
//     const userId = sessionStorage.getItem('userId');
//     const response = await base.get(`users/${userId}`, {
//       headers: {
//         Authorization: `Token ${token}`,
//       },
//     });
//     return response;
//   } catch (err) {
//     throw err;
//   }
// };
