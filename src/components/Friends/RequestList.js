import React from 'react';
import { Divider } from '@material-ui/core';
import sampleData from './sampleData.json';
import RequestItem from './RequestItem';

import '../../styles/components/Friends/RequestList.scss';

const RequestList = () => {
  return (
    <div className='request-list'>
      <h3>Friend Request</h3>
      <div className='scroll-list'>
        {sampleData.map((datum) => {
          return (
            <React.Fragment key={datum.avatar}>
              <RequestItem
                displayName={datum.displayName}
                avatar={datum.avatar}
              />
              <Divider />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default RequestList;
