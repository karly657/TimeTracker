import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import './App.css';
import Calendar from './components/calendar/Calendar';
import NotFoundPage from './components/notFoundPage/NotFoundPage';

const App = () => (
  <BrowserRouter>
    <Header />
    <div className="container">
      <Switch>
        <Route exact path='/'component={Calendar} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='*' exact={true} component={NotFoundPage} />
        
      </Switch>
    </div>


  </BrowserRouter>
);

// export default withAuthentication(App);
export default App;
