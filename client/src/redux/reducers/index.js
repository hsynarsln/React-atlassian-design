import { combineReducers } from 'redux';
import { notificationReducer, userReducer } from './userReducer';

const rootReducer = combineReducers({
  users: userReducer,
  notification: notificationReducer
});

export default rootReducer;
