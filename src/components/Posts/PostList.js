import React from 'react';
import { Link } from 'react-router-dom';
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
              <Link to={`/posts/detail/${datum.id}`}>
                <PostItem
                  displayName={datum.postFrom.displayName}
                  avatar={datum.postFrom.avatar}
                  content={datum.content}
                />
              </Link>

              <Divider />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
