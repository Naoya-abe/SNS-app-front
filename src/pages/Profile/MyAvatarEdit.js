import React from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { patchUser } from '../../redux/actions/users';
import history from '../../history';
import paths from '../../config/paths';

import '../../styles/pages/Profile/MyAvatarEdit.scss';

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

const MyAvatarEdit = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const { cookies, patchUser, userProfile } = props;
  const token = cookies.get('current-token');
  const userId = userProfile.id;
  const handleClose = () => {
    history.goBack();
  };
  const handleChangeImg = (e) => {
    try {
      let file = e.target.files[0];
      const params = new FormData();
      params.append('avatar', file, file.name);
      patchUser(token, userId, params);
      e.target.value = '';
      history.push(paths.profiles.myprofile.edit);
    } catch (err) {
      console.log(err);
    }
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Select an Image File</h2>
      <div className='button-container'>
        <label
          className='MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary'
          htmlFor='avatar-img'
        >
          Select
          <input
            id='avatar-img'
            type='file'
            accept='image/png, image/jpeg'
            onChange={handleChangeImg}
          />
        </label>
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

const cookieMyAvatarEdit = withCookies(MyAvatarEdit);

const mapStateToProps = (state) => {
  return {
    userProfile: state.user,
  };
};

export default connect(mapStateToProps, { patchUser })(cookieMyAvatarEdit);
