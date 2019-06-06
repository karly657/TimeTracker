import { connect } from 'react-redux'
import { signUp } from '@/actions/authActions'
import SignUpForm from './component'

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => ({ signUp: (creds) => dispatch(signUp(creds)) })

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)