import React from 'react'
import dateFns from 'date-fns'
import * as constants from '../../constants'

const NoteComponent = (props) => {
  if (props.notes) {
     let res = props.notes.find(o => dateFns.isSameDay(props.day, o.date));
    if (res) {
      return (
        <div className={`pt-5 ${res && res.hours > constants.MAX_HOURS ? "red-bg" : "green-bg"}`} >
          {res.hours} hours
        </div>
      )
    }

  }
  return null;
}

export default NoteComponent;


