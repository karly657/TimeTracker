import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../../actions/authActions'
import PropTypes from 'prop-types';

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

SignedInLinks.propTypes = {
  email: PropTypes.string.isRequired,
}

export default connect(null, mapDispatchToProps)(SignedInLinks);