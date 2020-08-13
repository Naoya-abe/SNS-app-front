import React, { createContext, useState, useEffect } from 'react';
import { withCookies } from 'react-cookie';
import axios from 'axios';

export const ApiContext = createContext();

const ApiContextProvider = (props) => {
  const token = props.cookies.get('current-token');
  const [profile, setProfile] = useState([]);
  const [userProfiles, setUserProfiles] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const res = await axios.get(
          'http://localhost:8080/api/user/myprofile/',
          { headers: { Authorization: `Token ${token}` } }
        );
        setProfile(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMyProfile();
  }, [token, profile.id]);

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

  return (
    <ApiContext.Provider value={{ profile, createPost, posts, getPosts }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default withCookies(ApiContextProvider);
