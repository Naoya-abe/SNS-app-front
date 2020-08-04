import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import Navbar from './Navbar';

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

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <p>App</p>
      <Navbar />
    </MuiThemeProvider>
  );
};

export default App;
