import React from 'react'
import { connect } from 'react-redux'
import SignedInLinks from './SignedInLinks'
import logo from '../../images/logo_timetracker.png';

const Header = (props) => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <img alt="logo" className="nav-item logo" src={logo} />
      {props.auth.uid && <SignedInLinks email={props.auth.email}/>}
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Header);