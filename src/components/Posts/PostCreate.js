import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button, TextField } from '@material-ui/core';
import { createPost } from '../../redux/actions/posts';
import ImageAvatar from '../ImageAvatar';

import '../../styles/components/Posts/PostCreate.scss';

const PostCreate = ({ userProfile, token, createPost }) => {
  const { register, handleSubmit } = useForm();
  const handleCreate = (data, e) => {
    try {
      const params = { ...data, postFromId: userProfile.id };
      createPost(token, params);
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className='create-post'>
      {userProfile && (
        <ImageAvatar alt='User avatar' src={userProfile.avatar} />
      )}
      <form onSubmit={handleSubmit(handleCreate)}>
        <TextField
          className='textarea'
          name='content'
          label="What's happening?"
          multiline
          inputRef={register({
            required: { value: true, message: 'Please enter post contents.' },
            maxLength: {
              value: 140,
              message: 'Please enter within 140 letters',
            },
          })}
          rows='5'
          // variant='filled'
          // variant='outlined'
        />
        <div className='button-container'>
          <Button variant='outlined' color='primary' type='submit'>
            Post
          </Button>
        </div>
      </form>
    </div>
  );
};

export default connect(null, { createPost })(PostCreate);
