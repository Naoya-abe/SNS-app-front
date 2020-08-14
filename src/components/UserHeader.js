import React from 'react';
import ImageAvatar from './ImageAvatar';

import '../styles/components/UserHeader.scss';

const UserHeader = ({ avatar, displayName }) => {
  return (
    <div className='user-header'>
      <ImageAvatar avatar={avatar} />
      <p className='display-name'>{displayName}</p>
    </div>
  );
};

export default UserHeader;
