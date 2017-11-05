import React from 'react'

import { Route } from 'react-router-dom'

import { Unauthorized } from './Unauthorized'

const PrivateRoute = ({ isLogged = false, component: Component, ...other }) => (
  <Route
    { ...other }
    render={props => {
      if (!isLogged) {
        return <Unauthorized />
      }
console.log('VOR', Component, props)
      return <Component { ...props } />
    }}
  />
)

export { PrivateRoute }
