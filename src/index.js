import React from 'react';
import ReactDOM from 'react-dom';
//  STORE
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// MIDDLEWARE
import Thunk from 'redux-thunk';
import Promise from 'redux-promise-middleware';
// ROUTING
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
// CONTAINERS
import App from '../src/App/App';
import About from '../src/Containers/About/AboutContainer';
import Draft from '../src/Containers/Draft/DraftContainer';
import Home from '../src/Containers/Home/HomeContainer';
import Search from '../src/Containers/Search/SearchContainer';
import User from '../src/Containers/User/UserContainer';


// Store with middleware.
const createStoreWithMiddleware = applyMiddleware(Thunk)(Promise)(createStore);

// Store with middleware and reducers
const store = createStoreWithMiddleware(
  combineReducers({
    routing: routerReducer
  })
);

// Sync history with store
const history = syncHistoryWithStore(browserHistory, store);

//Routing goes inside Provider
ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="about" component={About} />
        <Route path="search" component={Search} />
        <Route path="user/:id" component={User} />
        <Route path="draft" component={Draft} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
