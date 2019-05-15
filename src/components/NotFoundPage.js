import React from "react"
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const NotFoundPage = (props) => {
  return (
    <div>
      <h3>No match for {props.location.pathname}</h3>
      {props.auth.uid ? <Link to='/'>Go to calendar</Link> : <Link to='/signin'>Sign In</Link>}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(NotFoundPage);