import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as serviceWorker from './serviceWorker'
import { createStore,applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import fbConfig from './components/firebase/fbConfig'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import rootReducer from './reducers/rootReducer'

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

serviceWorker.unregister();
