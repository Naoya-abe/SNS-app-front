import React from 'react';
import { Divider } from '@material-ui/core';
import sampleData from './sampleData.json';
import PostDetail from './PostDetail';

import '../../styles/components/Posts/PostList.scss';

const PostList = () => {
  return (
    <div className='post-list'>
      <div className='scroll-list'>
        {sampleData.map((datum) => {
          return (
            <React.Fragment key={datum.avatar}>
              <PostDetail
                displayName={datum.displayName}
                avatar={datum.avatar}
                content={datum.content}
              />
              <Divider />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
