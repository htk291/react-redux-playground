import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router'

import store from 'REDUX/create'
import AppContainer from 'CONTAINERS/AppContainer'
import InputContainer from 'CONTAINERS/InputContainer'

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={AppContainer} />
      <Route path="/hoge" component={InputContainer}/>
    </Router>
  </Provider>,
  document.querySelector('#root')
)