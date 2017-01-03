import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import {reducer as reduxAsyncConnect} from 'redux-async-connect';

import formReducer from 'REDUX/reducer/formReducer';

let rootReducer = combineReducers({
  routing: routerReducer,
  formReducer,
})
export default rootReducer