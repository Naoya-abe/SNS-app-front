import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import ImageAvatar from '../ImageAvatar';

import '../../styles/components/Posts/PostCreate.scss';

const PostCreate = ({ profile, createPost }) => {
  const { register, handleSubmit } = useForm();
  const handleCreate = (data, e) => {
    createPost(data);
    e.target.reset();
  };
  return (
    <div className='create-post'>
      <ImageAvatar alt='User avatar' src='aaaaa' />
      <form onSubmit={handleSubmit(handleCreate)}>
        <textarea
          name='content'
          ref={register({
            required: { value: true, message: 'Please enter post contents.' },
            maxLength: {
              value: 140,
              message: 'Please enter within 140 letters',
            },
          })}
          placeholder="What's happening?"
        />
        <div className='button-container'>
          <Button variant='outlined' color='primary' type='submit'>
            Primary
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
