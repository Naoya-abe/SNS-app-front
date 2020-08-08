import React from 'react';
import { Divider } from '@material-ui/core';
import sampleData from './sampleData.json';
import PostDetail from './PostDetail';

const PostList = () => {
  return (
    <div className='post-list'>
      {sampleData.map((datum) => {
        return (
          <React.Fragment>
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
  );
};

export default PostList;
