import { connect } from 'react-redux'
import SignedInLinks from './component'
import { signOut } from '@/actions/authActions'

const mapDispatchToProps = dispatch => ({ signOut: () => dispatch(signOut()) })

export default connect(undefined, mapDispatchToProps)(SignedInLinks);
