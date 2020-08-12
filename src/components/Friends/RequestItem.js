import React from 'react';
import UserHeader from '../UserHeader';

const RequestItem = (props) => {
  const { displayName, avatar } = props;
  return <UserHeader avatar={avatar} displayName={displayName} />;
};

export default RequestItem;
