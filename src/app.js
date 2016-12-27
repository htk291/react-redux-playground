import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import createStore from 'REDUX/create'
import Components from 'COMPONENTS'

const store = createStore(null)

ReactDOM.render(
  <Provider store={store} key="provider">
    <Components />
  </Provider>,
  document.getElementById('root')
)