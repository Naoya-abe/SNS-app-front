import React, { useReducer } from 'react';
import { withCookies } from 'react-cookie';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
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
import {
  START_FETCH,
  FETCH_SUCCESS,
  ERROR_CATCHED,
  INPUT_EDIT,
} from './actionTypes';
import '../styles/components/Signin.scss';

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

// useReduserを使ってSignin.jsの状態を管理する
const initialState = {
  isLoading: false,
  error: '',
  credentialsSignin: {
    username: '',
    password: '',
  },
};

// stateを変更するreducerを書く
const signinReducer = (state, action) => {
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case ERROR_CATCHED:
      return {
        ...state,
        isLoading: false,
        error: 'Email or password is not correct',
      };
    case INPUT_EDIT:
      return {
        ...state,
        [action.inputName]: action.payload,
      };
    default:
      return state;
  }
};

const Signin = (props) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(signinReducer, initialState);

  const inputChanged = (event) => {
    const credentials = state.credentialsSignin;
    credentials[event.target.name] = event.target.value;
    dispatch({
      type: INPUT_EDIT,
      inputName: 'state.credentialsSignin',
      payload: credentials,
    });
  };

  const signin = async (event) => {
    event.preventDefault();
    try {
      dispatch({ type: START_FETCH });
      console.log(state.credentialsSignin);
      const res = await axios.post(
        'http://localhost:8080/authen/',
        state.credentialsSignin,
        { headers: { 'Content-Type': 'application/json' } }
      );
      props.cookies.set('current-token', res.data.token);
      window.location.href('/');
      dispatch({ type: FETCH_SUCCESS });
    } catch (err) {
      dispatch({ type: ERROR_CATCHED });
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
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={signin}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='username'
            autoComplete='email'
            autoFocus
            onChange={inputChanged}
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
            onChange={inputChanged}
          />
          <span className={classes.spanError}>{state.error}</span>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            {state.isLoading ? (
              <CircularProgress size={25} color='secondary' />
            ) : (
              'Sign In'
            )}
          </Button>
          <Grid container className='to-signup'>
            <Grid item>
              <RouterLink to='/signup'>
                {"Don't have an account? Sign Up"}
              </RouterLink>
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

export default withCookies(Signin);