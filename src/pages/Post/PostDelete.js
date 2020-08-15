import React from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { deletePost } from '../../redux/actions/posts';
import history from '../../history';
import '../../styles/pages/Post/PostDelete.scss';

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

const PostDelete = (props) => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const { match, cookies, deletePost } = props;
  const postId = match.params.id;
  const token = cookies.get('current-token');
  const handleClose = () => {
    history.goBack();
  };
  const handleDelete = () => {
    deletePost(token, postId);
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

const cookiePostDelete = withCookies(PostDelete);

export default connect(null, { deletePost })(cookiePostDelete);
