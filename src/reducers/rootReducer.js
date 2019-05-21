import { combineReducers } from 'redux';
import noteReducer from './noteReducer';
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  notes: noteReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;