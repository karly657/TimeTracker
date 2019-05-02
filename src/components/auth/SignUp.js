import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    name: '',
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

    //     const isInvalid =
//       passwordOne !== passwordTwo ||
//       passwordOne === '' ||
//       email === '' ||
//       username === '';

    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Sign Up</h5>
          <input placeholder="name" type="text" id='name' onChange={this.handleChange} />
          <input placeholder="email" type="email" id='email' onChange={this.handleChange} />
          <input placeholder="password" type="password" id='password' onChange={this.handleChange} />
          <button type="submit" className="">Sign Up</button>
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