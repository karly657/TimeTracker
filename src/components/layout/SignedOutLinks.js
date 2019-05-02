import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link to='/' className="nav-item nav-link text-light">SignUp</Link>
      <Link to='/' className="nav-item nav-link text-light">Login</Link>
    </nav>
  );
}

export default Header;