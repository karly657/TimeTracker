import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
  </div>
);

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <div className="container">
        <h5>Sign In</h5>
        <form onSubmit={this.onSubmit} className="">
          <input
            name="email"
            value={email}
            onChange={this.onChange}
            type="text"
            placeholder="Email Address"
          />
          <input
            name="password"
            value={password}
            onChange={this.onChange}
            type="password"
            placeholder="Password"
          />

          <button disabled={isInvalid} type="submit">Sign In</button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    )
  }
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInPage;

export { SignInForm };
