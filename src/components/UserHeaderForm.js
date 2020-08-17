import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ImageAvatar from './ImageAvatar';
import paths from '../config/paths';

const UserHeaderForm = (props) => {
  const { avatar } = props;
  return (
    <div className='user-avatar'>
      <ImageAvatar avatar={avatar} />
      <Link to={paths.profiles.myprofile.avatar}>Change Avatar</Link>
    </div>
  );
};

export default UserHeaderForm;
