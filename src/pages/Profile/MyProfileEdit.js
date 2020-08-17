import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { Divider, TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { patchUser } from '../../redux/actions/users';
import paths from '../../config/paths';
import UserHeaderForm from '../../components/UserHeaderForm';
import history from '../../history';

import '../../styles/pages/Profile/MyProfileEdit.scss';

const MyProfileEdit = (props) => {
  const { cookies, patchUser, userProfile } = props;
  const token = cookies.get('current-token');
  const userId = userProfile.id;
  const { register, handleSubmit } = useForm();
  const handleEdit = (data) => {
    try {
      patchUser(token, userId, data);
      history.push(paths.profiles.myprofile.main);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancel = () => {
    history.goBack();
  };
  return (
    <div className='my-profile-edit'>
      <h3>Edit My Profile</h3>
      <Divider />
      <form onSubmit={handleSubmit(handleEdit)}>
        <div className='user-header-form'>
          {userProfile.id && (
            <React.Fragment>
              <UserHeaderForm avatar={userProfile.avatar} />
              <div className='profile-container'>
                <TextField
                  name='displayName'
                  label='User Name'
                  defaultValue={userProfile.displayName}
                  inputRef={register({
                    required: {
                      value: true,
                      message: 'Please enter user name',
                    },
                    maxLength: {
                      value: 20,
                      message: 'Please enter within 20 letters',
                    },
                  })}
                  className='user-name-field'
                />
                <TextField
                  name='about'
                  label='Self Introduction'
                  multiline
                  defaultValue={userProfile.about}
                  inputRef={register({
                    required: {
                      value: true,
                      message: 'Please enter self introduction',
                    },
                    maxLength: {
                      value: 140,
                      message: 'Please enter within 140 letters',
                    },
                  })}
                  className='about-field'
                />
              </div>
            </React.Fragment>
          )}
        </div>
        <div className='button-container'>
          <Button variant='outlined' color='primary' type='submit'>
            Edit
          </Button>
          <Button variant='outlined' color='default' onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

const cookieMyProfileEdit = withCookies(MyProfileEdit);

const mapStateToProps = (state) => {
  return {
    userProfile: state.user,
  };
};

export default connect(mapStateToProps, { patchUser })(cookieMyProfileEdit);
