import React from 'react';
import { withCookies } from 'react-cookie';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import AfterRoutes from './parents/AfterRoutes';
import BeforeRoutes from './parents/BeforeRoutes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1565c0',
    },
    secondary: {
      main: '#00897b',
    },
    typography: {
      fontFamily: 'Roboto',
    },
  },
});

const Routes = (props) => {
  return (
    <MuiThemeProvider theme={theme}>
      {props.cookies.get('current-token') ? <AfterRoutes /> : <BeforeRoutes />}
      {/* {props.cookies.get('current-token') ? <BeforeRoutes /> : <AfterRoutes />} */}
    </MuiThemeProvider>
  );
};

export default withCookies(Routes);
