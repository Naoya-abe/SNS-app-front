import React, { createContext, useState } from 'react';
import { withCookies } from 'react-cookie';
import axios from 'axios';

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const token = props.cookies.get('current-token');
  const [profile, setProfile] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);
  const [posts, setPosts] = useState([]);

  const putPost = async (params, postId) => {
    try {
      await axios.put(`http://localhost:8080/api/post/${postId}/`, params, {
        headers: { Authorization: `Token ${token}` },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ApiContext.Provider value={{ profile, putPost, posts }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default withCookies(ApiContextProvider);
