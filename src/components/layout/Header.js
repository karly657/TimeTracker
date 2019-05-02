import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { AuthUserContext } from '../session';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link to='/' className="nav-item nav-link logo ">Logo</Link>
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? <SignedInLinks /> : <SignedOutLinks />
        }
      </AuthUserContext.Consumer>
    </nav>
  );
}

export default Header;