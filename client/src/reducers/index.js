import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { entriesReducer } from './entries';

export default combineReducers({
  authReducer: authReducer,
  entriesReducer: entriesReducer,
});
