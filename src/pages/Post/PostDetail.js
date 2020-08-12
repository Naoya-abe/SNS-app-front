import React from 'react';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PostItem from '../../components/Posts/PostItem';

const PostDetail = (ownProps) => {
  console.log(ownProps);
  return (
    <div className='post-detail'>
      {/* postの編集を行うためにはPostとUserが結びついていないとだめ...  DRF側のmodelの見直し*/}
      <h3>Post Detail</h3>
      <Divider />
      <PostItem
        avatar='aaa'
        displayName='User Name'
        content='aaaaaaaaaaaaaaaaaa'
      />
      <div className='button-container'>
        <Button variant='outlined' color='primary'>
          Edit
        </Button>
        <Button variant='outlined' color='primary'>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default PostDetail;
