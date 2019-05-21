import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Header from './components/Header/Header'
import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'
import CalendarPage from './components/pages/CalendarPage'
import NotFoundPage from './components/pages/NotFoundPage'
import CreateNoteForm from './components/forms/CreateNoteForm'

import './App.css'

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
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
            <PrivateRoute exact path='/' component={CalendarPage} auth={this.props.uid}/>
            <PrivateRoute path='/createnote' component={CreateNoteForm} auth={this.props.uid}/>
            <Route path='/signin' component={SignInPage} />
            <Route path='/signup' component={SignUpPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps)(App);
