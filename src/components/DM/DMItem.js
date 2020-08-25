import React from 'react';
import Button from '@material-ui/core/Button';
import UserHeader from '../UserHeader';
import history from '../../history';
import paths from '../../config/paths';

import '../../styles/components/DM/DMItem.scss';

const DMItem = (props) => {
  const { displayName, avatar, message } = props;
  const handleClick = () => {
    history.push(paths.dm.create);
  };
  return (
    <div className='dm-item'>
      <UserHeader avatar={avatar} displayName={displayName} />
      <p className='message'>{message}</p>
      <div className='button-container'>
        <Button variant='outlined' color='primary' onClick={handleClick}>
          Reply
        </Button>
      </div>
    </div>
  );
};

export default DMItem;
