import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../actions/authActions'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
    this.props.history.push('/');
  }

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to='/' />
    
    return (
      <div className="row justify-content-center">
          <form className="col-md-8" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <p>{ authError ? <p>{authError}</p> : null }</p>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)