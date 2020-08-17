import React from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { deleteUser } from '../../redux/actions/users';
import history from '../../history';
import '../../styles/pages/Profile/MyProfileDelete.scss';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const MyProfileDelete = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const { cookies, deleteUser, userProfile } = props;
  const token = cookies.get('current-token');
  const userId = userProfile.id;
  const handleClose = () => {
    history.goBack();
  };
  const handleDelete = () => {
    try {
      deleteUser(token, userId);
      cookies.remove('current-token');
      window.location.href = '/';
    } catch (err) {
      console.log(err);
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Are you sure?</h2>
      <div className='button-container'>
        <Button
          variant='outlined'
          color='secondary'
          type='submit'
          onClick={handleDelete}
        >
          Delete
        </Button>
        <Button variant='outlined' color='default' onClick={handleClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </Modal>
    </div>
  );
};

const cookieMyProfileDelete = withCookies(MyProfileDelete);

const mapStateToProps = (state) => {
  return {
    userProfile: state.user,
  };
};

export default connect(mapStateToProps, { deleteUser })(cookieMyProfileDelete);
