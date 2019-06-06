import React from 'react'
import { Link } from 'react-router-dom'
import { SIGN_IN_PAGE, CALENDAR_PAGE } from '@/constants'

/**
 * NotFoundPage component.
 * @param {object} obj 
 * @param {string} pathname Path
 * @param {string} uid User ID
 */
const NotFoundPage = ({location: {pathname}, uid}) => {
  const message = `No match for ${pathname}`;

  return (
    <>
      <h3>{message}</h3>
      {uid ? <Link to={CALENDAR_PAGE}>Go to calendar</Link> : <Link to={SIGN_IN_PAGE}>Sign In</Link>}
    </>
  );
}

export default NotFoundPage;