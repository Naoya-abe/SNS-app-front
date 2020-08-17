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
import { patchUser } from '../../redux/actions/users';
import paths from '../../config/paths';
import UserHeaderForm from '../../components/UserHeaderForm';
import history from '../../history';

import '../../styles/pages/Profile/MyProfileEdit.scss';

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
  const { cookies, patchUser, userProfile } = props;
  const token = cookies.get('current-token');
  const userId = userProfile.id;
  const { register, handleSubmit } = useForm();
  const classes = useStyles();
  const [age, setAge] = useState('');
  useEffect(() => {
    ((async) => {
      //   自分の申請が許可されたユーザ一覧を取得
    })();
  });
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleCreate = (data) => {
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
    <div className='dm-create'>
      <h3>Create Direct Messages</h3>
      <Divider />
      <form onSubmit={handleSubmit(handleCreate)}>
        <FormControl className={classes.formControl}>
          <InputLabel id='demo-simple-select-label'>Age</InputLabel>
          <Select
            labelId='demo-simple-select-label'
            id='demo-simple-select'
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
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

const cookieDMCreate = withCookies(DMCreate);

const mapStateToProps = (state) => {
  return {
    userProfile: state.user,
  };
};

export default connect(mapStateToProps)(cookieDMCreate);
