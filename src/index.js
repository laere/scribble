import React from 'react';
import ReactDOM from 'react-dom';
//  STORE
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise-middleware';
// ROUTING
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// CONTAINERS
import App from '../App/App';

// Store with middleware.
const createStoreWithMiddleware = applyMiddleware(Thunk)(Promise)(createStore);

// Store with middleware and reducers
const store = createStoreWithMiddleware(
  combineReducers({
    routing: routerReducer
  })
);

//Routing goes inside Provider
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App}>
        <Route path="/about" component={About} />
        <Route path="/search" component={Search} />
        <Route path="/user/:id" component={User} />
        <Route path="/draft" component={Draft} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
