import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import './App.css';
import Calendar from './components/Calendar/Calendar'

const App = () => (
  <BrowserRouter>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path='/'component={Calendar} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </div>


  </BrowserRouter>
);

// export default withAuthentication(App);
export default App;
