import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Header from '@/components/blocks/Header'
import SignInForm from '@/components/forms/SignIn'
import SignUpForm from '@/components/forms/SignUp'
import CalendarPage from '@/components/pages/CalendarPage'
import NotFoundPage from '@/components/pages/NotFoundPage'
import CreateNoteForm from '@/components/forms/CreateNote'
import { PrivateRoute } from '@/components/routes/PrivateRoute'

import { CALENDAR_PAGE, SIGN_IN_PAGE, SIGN_UP_PAGE, CREATE_NOTE_PAGE } from '@/constants'
import './App.css'

class App extends Component {
  render() {
    const {uid, email} = this.props;
    return (
      <BrowserRouter>
        <Header uid={uid} email={email} />
        <div className="container h-100 content">
          <Switch>
            <PrivateRoute exact path={CALENDAR_PAGE} component={CalendarPage} auth={this.props.uid}/>
            <PrivateRoute path={CREATE_NOTE_PAGE} component={CreateNoteForm} auth={this.props.uid}/>
            <Route path={SIGN_IN_PAGE} component={SignInForm} />
            <Route path={SIGN_UP_PAGE} component={SignUpForm} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </BrowserRouter >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    email: state.firebase.auth.email
  }
}

export default connect(mapStateToProps)(App);
