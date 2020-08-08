import React from 'react';
import { TextareaAutosize } from '@material-ui/core';
import ImageAvatar from '../ImageAvatar';

import '../../styles/components/Posts/PostCreate.scss';

const PostCreate = () => {
  return (
    <div className='create-post'>
      <ImageAvatar alt='User avatar' src='aaaaa' />
      <TextareaAutosize rowsMin='3' placeholder="What's happening?" />
    </div>
  );
};

export default PostCreate;
