import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/header/Header'
import SignInForm from './components/forms/SignInForm'
import SignUpForm from './components/forms/SignUpForm'
import './App.css'
import CalendarPage from './components/pages/CalendarPage'
import NotFoundPage from './components/pages/NotFoundPage'
import CreateNoteForm from './components/forms/CreateNoteForm'
import { connect } from 'react-redux'

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
            <Route path='/signin' component={SignInForm} />
            <Route path='/signup' component={SignUpForm} />
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
