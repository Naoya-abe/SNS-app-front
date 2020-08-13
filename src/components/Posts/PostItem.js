import React from 'react';
import UserHeader from '../UserHeader';

import '../../styles/components/Posts/PostItem.scss';

const PostItem = (props) => {
  const { displayName, avatar, content } = props;
  return (
    <React.Fragment>
      <UserHeader avatar={avatar} displayName={displayName} />
      <div className='post-content'>{content}</div>
    </React.Fragment>
  );
};

export default PostItem;
