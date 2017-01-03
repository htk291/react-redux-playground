import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router'
import store from 'REDUX/create'
import AppContainer from 'CONTAINERS/AppContainer'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer} />
    </Router>
  </Provider>,
  document.querySelector('#root')
)