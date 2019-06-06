import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { SIGN_IN_PAGE } from '@/constants'

/**
 * Private route component.
 * @param {object} obj 
 * @param {Component} obj.component
 * @param {string} obj.auth
 */
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route {...rest} render={(props) => (
      Boolean(auth)
        ? <Component {...props} />
        : <Redirect to={SIGN_IN_PAGE} />
    )} />
  )
}

export default PrivateRoute;
