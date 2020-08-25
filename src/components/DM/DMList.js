import React from 'react';
import { connect } from 'react-redux';
import { Divider } from '@material-ui/core';
import DMItem from './DMItem';

import '../../styles/components/DM/DMList.scss';

const DMList = (props) => {
  const { inbox, users } = props;
  return (
    <div className='dm-list'>
      <h3>DM</h3>
      <div className='scroll-list'>
        {inbox.map((dm) => {
          const userProfile = users[dm.sender];
          return (
            <React.Fragment key={dm.id}>
              <DMItem
                displayName={userProfile.displayName}
                avatar={userProfile.avatar}
                message={dm.message}
              />
              <Divider />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const inbox = Object.values(state.inbox);
  const reverseInbox = inbox.reverse();
  return {
    inbox: reverseInbox,
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(DMList);
