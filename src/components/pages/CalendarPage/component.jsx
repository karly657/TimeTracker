import React, { Component } from 'react'
import NewNoteBtn from '../../blocks/NewNoteBtn'
import Calendar from '../../blocks/Calendar'

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

export default CalendarPage;
