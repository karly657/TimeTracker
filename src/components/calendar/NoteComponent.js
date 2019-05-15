import React from "react"
import dateFns from "date-fns"

const NoteComponent = (props) => {
  let res;

  if (props.notes) {
    res = props.notes.find(o => dateFns.isSameDay(props.day, o.date));
    if (res && res.hours > 8) {
      return <div className="red-bg">{res.hours}</div>
    } else if (res) {
      return <div className="green-bg">{res.hours}</div>
    }
  }
  return null;
}

export default NoteComponent;
