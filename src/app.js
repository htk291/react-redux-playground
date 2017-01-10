import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import store from 'REDUX/create'
import App from 'COMPONENTS/App'
import Form from 'COMPONENTS/FormApp'
import InputCount from 'COMPONENTS/InputCount'
import List from 'COMPONENTS/List'

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={Form} />
        <Route path="input" component={InputCount}/>
        <Route path="list" component={List}/>
      </Route>
    </Router> 
  </Provider>,
  document.querySelector('#root')
)