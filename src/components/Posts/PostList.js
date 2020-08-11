import React from 'react';
import { Divider } from '@material-ui/core';
import PostItem from './PostItem';

import '../../styles/components/Posts/PostList.scss';

const PostList = ({ posts }) => {
  return (
    <div className='post-list'>
      <div className='scroll-list'>
        {posts.map((datum) => {
          return (
            <React.Fragment key={datum.id}>
              <PostItem
                displayName={datum.postFrom.displayName}
                avatar={datum.postFrom.avatar}
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
