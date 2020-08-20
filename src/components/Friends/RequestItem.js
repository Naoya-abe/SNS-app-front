import React from 'react';
import UserHeader from '../UserHeader';
import AcceptButton from './AcceptButton';

import '../../styles/components/Friends/RequestItem.scss';

const RequestItem = (props) => {
  const { displayName, avatar } = props;
  return (
    <div className='request-item'>
      <UserHeader avatar={avatar} displayName={displayName} />
      <AcceptButton />
    </div>
  );
};

export default RequestItem;
