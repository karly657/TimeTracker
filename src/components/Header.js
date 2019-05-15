import React from 'react'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'

const Header = (props) => {
  const links = props.auth.uid ? <SignedInLinks email={props.auth.email}/> : null;
  return (
    <nav className="navbar navbar-light bg-dark">
      <img alt="logo" className="nav-item logo" src={process.env.PUBLIC_URL + '/logo_timetracker.png'} />
      {links}
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Header);