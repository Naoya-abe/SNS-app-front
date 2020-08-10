import React from 'react';
import Button from '@material-ui/core/Button';
import ImageAvatar from '../ImageAvatar';

import '../../styles/components/Posts/PostCreate.scss';

const PostCreate = () => {
  return (
    <div className='create-post'>
      <ImageAvatar alt='User avatar' src='aaaaa' />
      <textarea placeholder="What's happening?" />
      <div className='button-container'>
        <Button variant='outlined' color='primary'>
          Primary
        </Button>
      </div>
    </div>
  );
};

export default PostCreate;
