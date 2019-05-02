import React from 'react';
// import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';

const Header = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile}/> : null;
  return (
    <nav className="navbar navbar-light bg-dark">
      <img alt="logo" className="nav-item logo" src={process.env.PUBLIC_URL + '/logo_timetracker.png'} />;
      {links}
    </nav>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Header);