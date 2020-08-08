import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ImageAvatar = ({ avatar }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar alt='User avatar' src={avatar} />
    </div>
  );
};

export default ImageAvatar;
