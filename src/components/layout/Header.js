import React from 'react';
// import { Link } from 'react-router-dom';
// import SignedInLinks from './SignedInLinks';
// import SignedOutLinks from './SignedOutLinks';
import { AuthUserContext } from '../session';
// import SignOutButton from '../auth/SignOut';
import { connect } from 'react-redux';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <img alt="logo" className="nav-item logo" src={process.env.PUBLIC_URL + '/logo_timetracker.png'} />;
    </nav>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}

export default connect(mapStateToProps)(Header);