import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import form from 'REDUX/reducer/form'
import input from 'REDUX/reducer/input'
import list from 'REDUX/reducer/list'

export default combineReducers({
  routing: routerReducer,
  form,
  input,
  list,
})