import React, { Component } from "react"
import { connect } from "react-redux"
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import NewNoteBtn from './NewNoteBtn'
import Calendar from './Calendar'

class CalendarPage extends Component {
  render() {
    const { notes } = this.props;

    return (
      <div>
        <NewNoteBtn />
        <Calendar notes={notes}/>
      </div>
    )
  }
}

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
)(CalendarPage)
