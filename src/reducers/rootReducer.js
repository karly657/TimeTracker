import authReducer from './authReducer';
import noteReducer from './noteReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
  auth: authReducer,
  notes: noteReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;