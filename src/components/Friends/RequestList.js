import React from 'react';
import { connect } from 'react-redux';
import { Divider } from '@material-ui/core';
import sampleData from './sampleData.json';
import RequestItem from './RequestItem';

import '../../styles/components/Friends/RequestList.scss';

const RequestList = (props) => {
  const { follower, users } = props;
  return (
    <div className='request-list'>
      <h3>Friend Request</h3>
      <div className='scroll-list'>
        {follower.map((datum) => {
          const askFrom = datum.askFrom;
          return (
            <React.Fragment key={datum.id}>
              <RequestItem
                displayName={users[askFrom].displayName}
                avatar={users[askFrom].avatar}
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
  return {
    follower: Object.values(state.follower),
    users: state.users,
  };
};

export default connect(mapStateToProps, null)(RequestList);
