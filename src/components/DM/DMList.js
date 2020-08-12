import React from 'react';
import { Divider } from '@material-ui/core';
import sampleData from './sampleData.json';
import DMItem from './DMItem';

import '../../styles/components/DM/DMList.scss';

const DMList = () => {
  return (
    <div className='dm-list'>
      <h3>DM</h3>
      <div className='scroll-list'>
        {sampleData.map((datum) => {
          return (
            <React.Fragment key={datum.avatar}>
              <DMItem
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
