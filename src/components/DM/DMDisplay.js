import React from 'react';
import UserHeader from '../UserHeader';

const DMDisplay = (props) => {
  const { displayName, avatar, message } = props;
  return (
    <div>
      <UserHeader avatar={avatar} displayName={displayName} />
      <div className='message'>{message}</div>
    </div>
  );
};

export default DMDisplay;
