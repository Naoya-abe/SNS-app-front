import React from 'react';
import { connect } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import { createUser } from '../redux/actions/users';
import '../styles/components/Signup.scss';

const Copyright = () => {
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {'Copyright © '}
      <Link color='inherit' href='https://pigblog.org/'>
        本とプログラミングと時々ミニブタ
      </Link>
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  span: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'teal',
    cursor: 'pointer',
  },
  spanError: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'fuchsia',
    marginTop: 10,
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const { createUser } = props;

  const handleSignup = (data) => {
    try {
      createUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form
          className={classes.form}
          noValidate
          onSubmit={handleSubmit(handleSignup)}
        >
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='displayName'
            label='User Name'
            name='displayName'
            autoComplete='displayName'
            inputRef={register({
              required: { value: true, message: 'Please enter displayName.' },
              maxLength: {
                value: 20,
                message: 'Please enter within 20 letters',
              },
            })}
            autoFocus
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            inputRef={register({
              required: {
                value: true,
                message: 'Please enter your email address',
              },
              pattern: {
                value: /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/,
                message: 'Please enter email address in the correct format',
              },
            })}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            inputRef={register({
              required: { value: true, message: 'Please enter your password' },
              minLength: {
                value: 4,
                message: 'Your password must be at least 4 characters',
              },
              maxLength: {
                value: 20,
                message: 'Please enter within 20 letters',
              },
            })}
          />
          {/* <span className={classes.spanError}>{state.error}</span> */}
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Sign Up
            {/* {state.isLoading ? (
              <CircularProgress size={25} color='secondary' />
            ) : (
              'Sign Up'
            )} */}
          </Button>
          <Grid container className='to-signin'>
            <Grid item>
              <RouterLink to='/signin'>{'Have an account? Sign In'}</RouterLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default connect(null, { createUser })(Signup);
