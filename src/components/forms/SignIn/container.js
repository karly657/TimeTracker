import { connect } from 'react-redux'
import { signIn } from '@/actions/authActions'
import SignInForm from './component'

const mapStateToProps = (state) => ({
  uid: state.firebase.auth.uid,
  authError: state.auth.authError
})

const mapDispatchToProps = dispatch => ({ signIn: (creds) => dispatch(signIn(creds)) })

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)