import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <NavLink to='/time-tracker' className="nav-item nav-link text-light">Time Tracker</NavLink>
      <NavLink to='/new-note' className="nav-item nav-link text-light">New Note</NavLink>
      {/* Email
      btn Sign Out */}
    </nav>
  );
}

export default SignedInLinks;