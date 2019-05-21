import React from 'react'
import { Link } from 'react-router-dom'

const NewNoteBtn = () => (
  <Link to="/createnote"><button className="btn btn-secondary">Create note</button></Link>
);

export default NewNoteBtn;
