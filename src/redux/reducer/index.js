import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import form from 'REDUX/reducer/form'
import input from 'REDUX/reducer/input'

let rootReducer = combineReducers({
  routing: routerReducer,
  form,
  input,
})
export default rootReducer