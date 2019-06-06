import React from 'react'
import dateFns from 'date-fns'
import { MAX_HOURS } from '@/constants'
import './styles.css'

/** 
 * Component that displays note in calendar cell.
 * @param {array} props.notes Array of all notes.
 * @param {date} props.day Current day.
 */
const Note = ({notes, day}) => {
  if (notes) {
    const currentNote = notes.find(note => dateFns.isSameDay(day, note.date));
    if (currentNote) {
      return (
        <div className={`pt-5 note 
          ${currentNote && currentNote.hours > MAX_HOURS 
            ? "red-bg" 
            : "green-bg"}`} >
          {currentNote.hours} hours
        </div>
      )
    }
  }
  return null;
}

export default Note;


