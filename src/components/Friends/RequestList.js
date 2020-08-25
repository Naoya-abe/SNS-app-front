import React from 'react';
import { connect } from 'react-redux';
import { Badge, Divider } from '@material-ui/core';
import EmojiPeopleOutlinedIcon from '@material-ui/icons/EmojiPeopleOutlined';
import RequestItem from './RequestItem';

import '../../styles/components/Friends/RequestList.scss';

const RequestList = (props) => {
  const { follower, users } = props;
  const followRequest = follower.filter((datum) => {
    return datum.approved === false;
  });
  const requestNum = followRequest.length;
  return (
    <div className='request-list'>
      <div className='title-container'>
        <h3>Friend Request</h3>
        <Badge badgeContent={requestNum} color='primary'>
          <EmojiPeopleOutlinedIcon />
        </Badge>
      </div>
      <div className='scroll-list'>
        {follower.map((datum) => {
          const askFrom = datum.askFrom;
          return (
            <React.Fragment key={datum.id}>
              {!datum.approved ? (
                <React.Fragment>
                  <RequestItem
                    displayName={users[askFrom].displayName}
                    avatar={users[askFrom].avatar}
                    requestId={datum.id}
                    askFrom={askFrom}
                  />
                  <Divider />
                </React.Fragment>
              ) : null}
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
