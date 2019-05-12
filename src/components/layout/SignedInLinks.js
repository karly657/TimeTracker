import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../actions/authActions'

const SignedInLinks = (props) => {
  return (
    <div>
      <span className="header-email">{props.email}</span>
      <button className="log-out-button" type="button" onClick={props.signOut}>Log Out</button>
    </div>
    
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);