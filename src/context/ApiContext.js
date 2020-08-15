import React, { createContext, useState, useEffect } from 'react';
import { withCookies } from 'react-cookie';
import axios from 'axios';

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const token = props.cookies.get('current-token');
  const [profile, setProfile] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);
  const [posts, setPosts] = useState([]);

  const createPost = async (params) => {
    try {
      const res = await axios.post('http://localhost:8080/api/post/', params, {
        headers: { Authorization: `Token ${token}` },
      });
      setPosts([...posts, res.data]);
    } catch (err) {
      console.log(err);
    }
  };

  const getPosts = async () => {
    try {
      const res = await axios.get('http://localhost:8080/api/post/', {
        headers: { Authorization: `Token ${token}` },
      });
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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
    <ApiContext.Provider
      value={{ profile, createPost, putPost, posts, getPosts }}
    >
      {props.children}
    </ApiContext.Provider>
  );
};

export default withCookies(ApiContextProvider);
