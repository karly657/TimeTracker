import React from 'react'

/**
 * Component that displays email and logout button when user signed in.
 * @param {string} props.email User email.
 * @param {function} props.signOut Sign out.
 */
const SignedInLinks = ({ email, signOut }) => (
  <div>
    <span className="header-email">{email}</span>
    <button className="log-out-button" type="button" onClick={signOut}>Log Out</button>
  </div>
)

export default SignedInLinks;