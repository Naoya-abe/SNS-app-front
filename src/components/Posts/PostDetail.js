import React from 'react';
import ImageAvatar from '../ImageAvatar';
import UserHeader from '../UserHeader';

import '../../styles/components/Posts/PostDetail.scss';

const PostDetail = (props) => {
  const { displayName, avatar, content } = props;
  return (
    <div>
      <UserHeader avatar={avatar} displayName={displayName} />
      <div className='post-content'>{content}</div>
    </div>
  );
};

export default PostDetail;
