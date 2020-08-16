import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { withCookies } from 'react-cookie';
import paths from '../config/paths';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: '20%',
    flexShrink: 0,
  },
  drawerPaper: {
    width: '20%',
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  const Signout = (event) => {
    props.cookies.remove('current-token');
    window.location.href = '/';
  };
  const renderSwitch = (text, index) => {
    switch (index) {
      case 0:
        return (
          <Link to={paths.home.main}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        );
      case 1:
        return (
          <Link to={paths.profiles.myprofile.main}>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        );
      case 2:
        return (
          <Link to='/inbox'>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        );
      case 3:
        return (
          <Link to='/friends'>
            <ListItem button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </Link>
        );
      default:
        return (
          <ListItem button onClick={Signout}>
            <ListItemIcon>
              <ExitToAppIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        );
    }
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor='left'
      >
        <div className={classes.toolbar} />
        <List>
          {['Home', 'Profile', 'DM', 'Friends', 'Sign Out'].map(
            (text, index) => {
              return (
                <React.Fragment key={text}>
                  {renderSwitch(text, index)}
                </React.Fragment>
              );
            }
          )}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default withCookies(Navbar);
