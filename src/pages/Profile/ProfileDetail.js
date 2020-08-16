import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withCookies } from 'react-cookie';
import { Link } from 'react-router-dom';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const ProfileDetail = () => {
  return (
    <div className='profile-detail'>
      <h3>Profile Detail</h3>
      <Divider />
      {/* {post && (
        <React.Fragment>
          <PostItem
            avatar={post.postFrom.avatar}
            displayName={post.postFrom.displayName}
            content={post.content}
          />
          {userProfile && userProfile.id === post.postFrom.id ? (
            <div className='button-container'>
              <Link to={`/posts/edit/${postId}`}>
                <Button variant='outlined' color='primary'>
                  Edit
                </Button>
              </Link>
              <Link to={`/posts/delete/${postId}`}>
                <Button variant='outlined' color='secondary'>
                  Delete
                </Button>
              </Link>
            </div>
          ) : null}
        </React.Fragment> */}
      )}
    </div>
  );
};

const cookieProfileDetail = withCookies(ProfileDetail);

const mapStateToProps = (state) => {
  return { userProfile: state.user };
};

export default connect(mapStateToProps, null)(cookieProfileDetail);
