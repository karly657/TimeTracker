import authReducer from './authReducer';
// import noteReducer from './noteReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
  auth: authReducer,
  // notes: noteReducer
  firebase: firebaseReducer
});

export default rootReducer;