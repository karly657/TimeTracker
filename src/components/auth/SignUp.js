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
    console.log(this.state);
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
          <h5>Sign In</h5>
          <input placeholder="email" type="email" id='email' onChange={this.handleChange} />
          <input placeholder="password" type="password" id='password' onChange={this.handleChange} />
          <input type="text" id='name' onChange={this.handleChange} />
          <button type="submit" className="">Sign Up</button>
          { authError ? <p>{authError}</p> : null }
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

// import { Link, withRouter } from 'react-router-dom';
// import { withFirebase } from '../Firebase';

// const INITIAL_STATE = {
//   username: '',
//   email: '',
//   passwordOne: '',
//   passwordTwo: '',
//   error: null,
// };

// const SignUpPage = () => (
//   <div>
//     <h1>SignUp</h1>
//     <SignUpForm />
//   </div>
// );

// class SignUpFormBase extends Component {
//   constructor(props) {
//     super(props);
//     this.state = INITIAL_STATE;
//   }

//   onSubmit = event => {
//     const { username, email, passwordOne } = this.state;

//     this.props.firebase
//       .doCreateUserWithEmailAndPassword(email, passwordOne)
//       .then(authUser => {
//         this.setState({ ...INITIAL_STATE });
//         this.props.history.push('/');
//       })
//       .catch(error => {
//         this.setState({ error });
//       });

//     event.preventDefault();
//   }

//   onChange = event => {
//     this.setState({ [event.target.name]: event.target.value });
//   }

//   render() {
//     const {
//       username,
//       email,
//       passwordOne,
//       passwordTwo,
//       error,
//     } = this.state;

//     const isInvalid =
//       passwordOne !== passwordTwo ||
//       passwordOne === '' ||
//       email === '' ||
//       username === '';

//     return (
//       <div className="container">
//         <h5>Sign Up</h5>
//         <form onSubmit={this.onSubmit} className="">
//           <input
//             name="username"
//             value={username}
//             onChange={this.onChange}
//             type="text"
//             placeholder="Full Name"
//           />
//           <input
//             name="email"
//             value={email}
//             onChange={this.onChange}
//             type="text"
//             placeholder="Email Address"
//           />
//           <input
//             name="passwordOne"
//             value={passwordOne}
//             onChange={this.onChange}
//             type="password"
//             placeholder="Password"
//           />
//           <input
//             name="passwordTwo"
//             value={passwordTwo}
//             onChange={this.onChange}
//             type="password"
//             placeholder="Confirm Password"
//           />

//           <button disabled={isInvalid} type="submit">Sign Up</button>

//           {error && <p>{error.message}</p>}
//         </form>
//       </div>
//     )
//   }
// }

// const SignUpForm = withRouter(withFirebase(SignUpFormBase));

// export default SignUpPage;

// export { SignUpForm };
