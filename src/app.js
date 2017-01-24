import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store from 'REDUX/create'
import { App, FormApp, InputCount, List, Modal, ToggleModal } from 'COMPONENTS'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={FormApp} />
        <Route path="input" component={InputCount}/>
        <Route path="list" component={List}/>
        <Route path="modal" component={ToggleModal}/>
      </Route>
    </Router> 
  </Provider>,
  document.querySelector('#root')
)