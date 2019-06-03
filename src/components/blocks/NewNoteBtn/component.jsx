import React from 'react'
import { Link } from 'react-router-dom'
import { CREATE_NOTE_PAGE } from '../../../constants'

const NewNoteBtn = () => (
  <Link to={CREATE_NOTE_PAGE}><button className="btn btn-secondary">Create note</button></Link>
);

export default NewNoteBtn;
