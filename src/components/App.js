import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';

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
    </MuiThemeProvider>
  );
};

export default App;
