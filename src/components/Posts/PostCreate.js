import React from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { createPost } from '../../redux/actions/posts';
import ImageAvatar from '../ImageAvatar';

import '../../styles/components/Posts/PostCreate.scss';

const PostCreate = ({ userProfile, token, createPost }) => {
  const { register, handleSubmit } = useForm();
  const handleCreate = (data, e) => {
    const params = { ...data, postFromId: userProfile.id };
    createPost(token, params);
    e.target.reset();
  };
  return (
    <div className='create-post'>
      {userProfile && (
        <ImageAvatar alt='User avatar' src={userProfile.avatar} />
      )}
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

export default connect(null, { createPost })(PostCreate);
