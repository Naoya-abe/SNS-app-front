import React from 'react';
import { Divider } from '@material-ui/core';
import sampleData from './sampleData.json';
import DMDisplay from './DMDisplay';

import '../../styles/components/DM/DMList.scss';

const DMList = () => {
  return (
    <div className='dm-list'>
      <h3>DM</h3>
      <div className='scroll-list'>
        {sampleData.map((datum) => {
          return (
            <React.Fragment key={datum.avatar}>
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
    </div>
  );
};

export default DMList;
