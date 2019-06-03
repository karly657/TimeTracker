import { connect } from 'react-redux'
import NotFoundPage from './component'

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps)(NotFoundPage);
