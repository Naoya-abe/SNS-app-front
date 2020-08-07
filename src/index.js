import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Routes from './routes';
import history from './history';

const routing = (
  <Router history={history}>
    <CookiesProvider>
      <Routes />
    </CookiesProvider>
  </Router>
);

ReactDOM.render(routing, document.querySelector('#root'));
