import React, { Component } from 'react'
import { createNote } from '../../actions/noteActions'
import { connect } from 'react-redux'

class CreateNote extends Component {
  state = {
    date: '',
    hours: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createNote(this.state);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <h1>Create note page</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} name="date" type="text" placeholder="date"/>
          <input onChange={this.handleChange} name="hours" type="text" placeholder="hours"/>
          <button type="submit">Create Note</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNote: (note) => dispatch(createNote(note))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNote)