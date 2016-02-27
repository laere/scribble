import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import Promise from 'redux-promise-middleware';


import App from './App/Aapp';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(Thunk)(Promise)(createStore);
const store = createStoreWithMiddleware(reducers);

//Routing goes inside Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('.container'));
