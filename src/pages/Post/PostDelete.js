import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import history from '../../history';

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

const PostDelete = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const handleClose = () => {
    history.goBack();
  };

  const deletePost = () => {
    console.log('delete');
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id='simple-modal-title'>Are you sure?</h2>
      <div className='button-container'>
        <Button
          variant='outlined'
          color='secondary'
          type='submit'
          onClick={deletePost}
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

export default PostDelete;
