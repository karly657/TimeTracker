import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../store/actions/authActions'

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
    this.props.signIn(this.state)
  }
  render() {
    const { authError } = this.props;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <h5>Sign In</h5>
          <input placeholder="email" type="email" id='email' onChange={this.handleChange} />
          <input placeholder="password" type="password" id='password' onChange={this.handleChange} />

          <button type="submit" className="">Login</button>
          { authError ? <p>{authError}</p> : null }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
// import { withFirebase } from '../Firebase';

// const INITIAL_STATE = {
//   email: '',
//   password: '',
//   error: null,
// };

// const SignInPage = () => (
//   <div>
//     <h1>SignIn</h1>
//     <SignInForm />
//   </div>
// );

// class SignInFormBase extends Component {
//   constructor(props) {
//     super(props);

//     this.state = { ...INITIAL_STATE };
//   }

//   onSubmit = event => {
//     const { email, password } = this.state;

//     this.props.firebase
//       .doSignInWithEmailAndPassword(email, password)
//       .then(() => {
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
//       email,
//       password,
//       error,
//     } = this.state;

//     const isInvalid = password === '' || email === '';

//     return (
//       <div>
//         <h5>Sign In</h5>
//         <form onSubmit={this.onSubmit} className="">
//             <input
//               name="email"
//               value={email}
//               onChange={this.onChange}
//               type="text"
//               placeholder="Email Address"
//             />
//             <input
//               name="password"
//               value={password}
//               onChange={this.onChange}
//               type="password"
//               placeholder="Password"
//             />

//             <button disabled={isInvalid} type="submit">Sign In</button>

//             {error && <p>{error.message}</p>}
//         </form>
//       </div>
//         )
//       }
//     }

//     const SignInForm = withRouter(withFirebase(SignInFormBase));

//     export default SignInPage;

// export {SignInForm};
