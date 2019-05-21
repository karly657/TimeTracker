import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const NotFoundPage = (props) => {
  const message = `No match for ${props.location.pathname}`;
  
  return (
    <div>
      <h3>{message}</h3>
      {props.uid ? <Link to='/'>Go to calendar</Link> : <Link to='/signin'>Sign In</Link>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    uid: state.firebase.auth.uid
  }
}

export default connect(mapStateToProps)(NotFoundPage);