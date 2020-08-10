import React from 'react';
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
  const renderSwitch = (index) => {
    switch (index) {
      case 0:
        return <HomeIcon />;
      case 1:
        return <PersonIcon />;
      case 2:
        return <MailIcon />;
      case 3:
        return <PeopleIcon />;
      default:
        return <ExitToAppIcon />;
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
          {['Home', 'Profile', 'DM', 'Friends', 'Sign Out'].map((text, index) =>
            index === 4 ? (
              <ListItem button key={text} onClick={Signout}>
                <ListItemIcon>{renderSwitch(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ) : (
              <ListItem button key={text}>
                <ListItemIcon>{renderSwitch(index)}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </React.Fragment>
  );
};

export default withCookies(Navbar);
