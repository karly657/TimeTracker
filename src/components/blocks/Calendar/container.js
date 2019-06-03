import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import Calendar from './component'

const mapStateToProps = (state) => {
  return {
    notes: state.firestore.ordered.notes,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notes' }
  ])
)(Calendar)


