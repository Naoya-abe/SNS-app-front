import React from 'react';
import UserHeader from '../UserHeader';

import '../../styles/components/Posts/PostItem.scss';

const PostItem = (props) => {
  const { displayName, avatar, content } = props;
  return (
    <div>
      <UserHeader avatar={avatar} displayName={displayName} />
      <div className='post-content'>{content}</div>
    </div>
  );
};

export default PostItem;
