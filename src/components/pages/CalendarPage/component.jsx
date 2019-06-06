import React, { Component } from 'react'
import NewNoteBtn from '@/components/controls/NewNoteBtn'
import Calendar from '@/components/blocks/Calendar'

/**
 * CalendarPage component.
 */
class CalendarPage extends Component {
  render() {
    const { notes } = this.props;
    
    return (
      <>
        <NewNoteBtn />
        <Calendar notes={notes}/>
      </>
    )
  }
}

export default CalendarPage;
