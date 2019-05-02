import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import SignIn from './components/auth/SignIn';
import SignUpPage from './components/auth/SignUp';
import SignOutButton from './components/auth/SignOut';
import { withAuthentication } from './components/session';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path='/signin' component={SignIn}></Route>
      <Route path='/signup' component={SignUpPage}></Route>
    </Switch>
    <SignOutButton />
  </BrowserRouter>
);

export default withAuthentication(App);
