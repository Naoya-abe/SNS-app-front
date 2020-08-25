import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { useForm } from 'react-hook-form';
import { Divider, TextField, Select } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createDM } from '../../redux/actions/DM';
import { fetchFriends } from '../../redux/actions/friends';
import paths from '../../config/paths';
import history from '../../history';

import '../../styles/pages/DM/DMCreate.scss';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const DMCreate = (props) => {
  const {
    cookies,
    patchUser,
    userProfile,
    fetchFriends,
    friends,
    createDM,
    users,
  } = props;
  const token = cookies.get('current-token');
  const userId = userProfile.id;
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const [destId, setDestId] = useState('');
  useEffect(() => {
    (async () => {
      fetchFriends(token);
    })();
  }, [fetchFriends, token]);
  const handleChange = (event) => {
    console.log(event.target.value);
    setDestId(event.target.value);
  };
  const handleCreate = (data) => {
    try {
      const params = { receiver: destId, message: data.message };
      createDM(token, params);
      // history.push(paths.profiles.myprofile.main);
    } catch (err) {
      console.log(err);
    }
  };
  // const handleCancel = (e) => {
  //   e.target.reset();
  // };

  return (
    <div className='dm-create'>
      <h3>Create Direct Messages</h3>
      <Divider />
      <form onSubmit={handleSubmit(handleCreate)}>
        <div className='form-container'>
          <FormControl className={classes.formControl}>
            <InputLabel id='demo-simple-select-label'>Destination</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={destId}
              onChange={handleChange}
            >
              {friends.map((friend) => {
                const friendId = friend.askTo;
                const friendProfile = users[friendId];
                return (
                  friendProfile && (
                    <MenuItem value={friendProfile.id} key={friendProfile.id}>
                      {friendProfile.displayName}
                    </MenuItem>
                  )
                );
              })}
            </Select>
          </FormControl>
          <TextField
            name='message'
            label='Message'
            multiline
            inputRef={register({
              required: {
                value: true,
                message: 'Please enter message',
              },
              maxLength: {
                value: 140,
                message: 'Please enter within 140 letters',
              },
            })}
            className='message-field'
          />
        </div>
        <div className='button-container'>
          <Button variant='outlined' color='primary' type='submit'>
            Send
          </Button>
          {/* <Button variant='outlined' color='default' onClick={handleCancel}>
            Delete
          </Button> */}
        </div>
      </form>
    </div>
  );
};

const cookieDMCreate = withCookies(DMCreate);

const mapStateToProps = (state) => {
  return {
    userProfile: state.user,
    users: state.users,
    friends: Object.values(state.friends),
  };
};

export default connect(mapStateToProps, { fetchFriends, createDM })(
  cookieDMCreate
);
