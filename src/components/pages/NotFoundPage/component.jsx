import React from 'react'
import { Link } from 'react-router-dom'
import { SIGN_IN_PAGE, CALENDAR_PAGE } from '../../../constants'

const NotFoundPage = (props) => {
  const { pathname, uid } = props.location.pathname;
  const message = `No match for ${pathname}`;
  
  return (
    <div>
      <h3>{message}</h3>
      {uid ? <Link to={CALENDAR_PAGE}>Go to calendar</Link> : <Link to={SIGN_IN_PAGE}>Sign In</Link>}
    </div>
  );
}

export default NotFoundPage;