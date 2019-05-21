import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import thunk from 'redux-thunk'
import { createStore,applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import App from './App'
import './index.css'
import rootReducer from './reducers/rootReducer'
import fbConfig from './firebase/fbConfig'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig),
    reduxFirestore(fbConfig)
  )
);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, 
  document.getElementById('root')
);
