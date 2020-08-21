import React from 'react';
import UserHeader from '../UserHeader';
import AcceptButton from './AcceptButton';

import '../../styles/components/Friends/RequestItem.scss';

const RequestItem = (props) => {
  const { displayName, avatar, requestId, askFrom } = props;
  return (
    <div className='request-item'>
      <UserHeader avatar={avatar} displayName={displayName} />
      <AcceptButton requestId={requestId} askFrom={askFrom} />
    </div>
  );
};

export default RequestItem;
