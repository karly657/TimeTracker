import React from 'react'
import { Link } from 'react-router-dom'
import { CREATE_NOTE_PAGE } from '@/constants'

/**
 * Component that displays link to create note page.
 */
const NewNoteBtn = () => (
  <Link to={CREATE_NOTE_PAGE} className="btn btn-secondary">Create note</Link>
);

export default NewNoteBtn;
