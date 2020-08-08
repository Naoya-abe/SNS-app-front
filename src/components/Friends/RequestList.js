import React from 'react';
import { Divider } from '@material-ui/core';
import sampleData from './sampleData.json';
import RequestDisplay from './RequestDisplay';

const RequestList = () => {
  return (
    <div className='request-list'>
      <h3>Friend Request</h3>
      {sampleData.map((datum) => {
        return (
          <React.Fragment>
            <RequestDisplay
              displayName={datum.displayName}
              avatar={datum.avatar}
            />
            <Divider />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default RequestList;
