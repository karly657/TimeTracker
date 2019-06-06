import { createNote } from '@/actions/noteActions'
import { connect } from 'react-redux'
import CreateNoteForm from './component'

const mapDispatchToProps = dispatch => ({ createNote: (note) => dispatch(createNote(note)) })

export default connect(undefined, mapDispatchToProps)(CreateNoteForm)