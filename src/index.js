import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import thunk from 'redux-thunk';

import history from './history';
import Routes from './routes';
import reducers from './redux/reducers';
import { CookiesProvider } from 'react-cookie';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const main = async () => {
  ReactDOM.render(
    <Provider store={Store}>
      <Router history={history}>
        <CookiesProvider>
          <Routes />
        </CookiesProvider>
      </Router>
    </Provider>,
    document.querySelector('#root')
  );
};

main();
