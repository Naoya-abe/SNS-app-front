import React from 'react';
import { Divider } from '@material-ui/core';
import sampleData from './sampleData.json';
import DMDisplay from './DMDisplay';

const DMList = () => {
  return (
    <div className='dm-list'>
      <h3>DM</h3>
      {sampleData.map((datum) => {
        return (
          <React.Fragment>
            <DMDisplay
              displayName={datum.displayName}
              avatar={datum.avatar}
              message={datum.message}
            />
            <Divider />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default DMList;
