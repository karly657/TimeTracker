import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../actions/authActions'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    passwordTwo: '',
    firstName: '',
    secondName: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;

    const isInvalid = 
      this.state.email === '' ||
      this.state.password !== this.state.passwordTwo ||
      this.state.firstName === '' ||
      this.state.secondName === '';

    if (auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Sign Up</h5>
          <input placeholder="First Name" type="text" id='firstName' onChange={this.handleChange} />
          <input placeholder="Second Name" type="text" id='secondName' onChange={this.handleChange} />
          <input placeholder="Email" type="email" id='email' onChange={this.handleChange} />
          <input placeholder="Password" type="password" id='password' onChange={this.handleChange} />
          <input placeholder="Repeat password" type="password" id='passwordTwo' onChange={this.handleChange} />
          <button type="submit" disabled={isInvalid} className="">Sign Up</button>
          { authError ? {authError} : null }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)