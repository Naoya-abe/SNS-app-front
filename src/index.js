import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Route, BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import Signin from './components/Signin';

const routing = (
  <BrowserRouter>
    <CookiesProvider>
      <Route exact path='/' component={Signin} />
      <Route exact path='/home' component={App} />
    </CookiesProvider>
  </BrowserRouter>
);

ReactDOM.render(routing, document.querySelector('#root'));
