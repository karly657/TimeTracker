import React from 'react'
import SignedInLinks from '@/components/blocks/SignedInLinks'
import logo from '@/assets/logo_timetracker.png'
import './styles.css'

/**
 * Header component.
 * @param {string} props.uid User ID.
 * @param {string} props.email User email.
 */
const Header = ({uid, email}) => {
  return (
    <nav className="navbar navbar-light bg-dark">
      <img alt="logo" className="nav-item logo" src={logo} />
      {uid && <SignedInLinks email={email}/>}
    </nav>
  );
}

export default Header;