import React from 'react'
import dateFns from 'date-fns'
import { MAX_HOURS } from '../../../constants'
import './styles.css'

const Note = (props) => {
  if (props.notes) {
    const currentNote = props.notes.find(note => dateFns.isSameDay(props.day, note.date));
    if (currentNote) {
      return (
        <div className={`pt-5 note ${currentNote && currentNote.hours > MAX_HOURS ? "red-bg" : "green-bg"}`} >
          {currentNote.hours} hours
        </div>
      )
    }
  }
  return null;
}

export default Note;


