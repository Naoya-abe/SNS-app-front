import React from 'react';
import ImageAvatar from './ImageAvatar';

import '../styles/components/UserHeader.scss';

const UserHeader = ({ avatar, displayName, detail, about }) => {
  return (
    <React.Fragment>
      <div className='user-header'>
        <ImageAvatar avatar={avatar} />
        <h3 className='display-name'>{displayName}</h3>
      </div>
      {detail && (
        <div className='about-user'>
          <p>{about}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default UserHeader;
