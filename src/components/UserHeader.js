import React from 'react';
import ImageAvatar from './ImageAvatar';

import '../styles/components/UserHeader.scss';

const UserHeader = ({ avatar, displayName }) => {
  return (
    <div className='user-header'>
      <ImageAvatar avatar={avatar} />
      <h4>{displayName}</h4>
    </div>
  );
};

export default UserHeader;
