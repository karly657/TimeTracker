import React from 'react';
import { Link } from 'react-router-dom';

const NewNoteBtn = () => (
  <p><Link to="/createnote"><button className="btn btn-secondary">Create note</button></Link></p>
);

export default NewNoteBtn;
