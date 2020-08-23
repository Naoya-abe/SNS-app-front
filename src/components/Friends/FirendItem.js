import React from 'react';
import UserHeader from '../UserHeader';

const FirendItem = ({ profile }) => {
  return (
    <div className='friend-item'>
      <div className='friend-header'>
        <UserHeader
          about={profile.about}
          avatar={profile.avatar}
          displayName={profile.displayName}
          detail
        />
      </div>
    </div>
  );
};

export default FirendItem;
