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
      main: '#f44336',
    },
    typography: {
      fontFamily: 'Roboto',
    },
  },
});

const Routes = (props) => {
  const token = props.cookies.get('current-token');
  return (
    <MuiThemeProvider theme={theme}>
      {token ? <AfterRoutes token={token} /> : <BeforeRoutes />}
    </MuiThemeProvider>
  );
};

export default withCookies(Routes);
