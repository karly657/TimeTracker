import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/layout/Header'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import './App.css'
import CalendarPage from './components/calendar/CalendarPage'
import NotFoundPage from './components/NotFoundPage'
import CreateNote from './components/calendar/CreateNote'
import { connect } from 'react-redux'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  console.log(auth)
  return (
    <Route {...rest} render={(props) => (
      Boolean(auth)
        ? <Component {...props} />
        : <Redirect to='/signin' />
    )} />
  )
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="container h-100 content">
          <Switch>
            <PrivateRoute exact path='/' component={CalendarPage} auth={this.props.auth.uid} />
            <PrivateRoute path='/createnote' component={CreateNote} auth={this.props.auth.uid} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);
