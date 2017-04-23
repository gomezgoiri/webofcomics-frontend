import React, { PropTypes } from 'react'

const LoginMenuItem = ({ username, isLoggedIn }) => (
  <span>{ isLoggedIn ? 'Log out (' + username + ')' : 'Log in' }</span>
)

LoginMenuItem.propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool
}

export default LoginMenuItem
