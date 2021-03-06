import React from 'react';
import { Link } from 'react-router-dom';
import UserHeader from '../UserHeader';

import '../../styles/components/Posts/PostItem.scss';
import RequestButton from '../Friends/RequestButton';

const PostItem = (props) => {
  const {
    userId,
    postUserId,
    postId,
    displayName,
    avatar,
    content,
    detail,
  } = props;
  return (
    <div className='post-item'>
      {!detail ? (
        <Link to={`/posts/detail/${postId}`}>
          <div className='post-container'>
            <UserHeader avatar={avatar} displayName={displayName} />
            <div className='post-content'>{content}</div>
          </div>
        </Link>
      ) : (
        <div className='post-container'>
          <UserHeader avatar={avatar} displayName={displayName} />
          <div className='post-content'>{content}</div>
        </div>
      )}

      {userId !== postUserId ? (
        <RequestButton askFrom={userId} askTo={postUserId} />
      ) : null}
    </div>
  );
};

export default PostItem;
