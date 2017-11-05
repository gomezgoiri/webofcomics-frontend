import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

import FlatButton from 'material-ui/FlatButton'
import FileUpload from 'material-ui/svg-icons/file/file-upload'

import { ROUTE as NEW_STRIP } from 'components/creation'
import LoggedMenu from './LoggedMenu'

import './menu.css'

const LoginMenu = ({
  isLoggedIn,
  onLoginClick,
  ...other
}) => {
  if (!isLoggedIn) {
    return <FlatButton onClick={onLoginClick} label='Login' style={{ color: '#fff' }} />
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Link to={NEW_STRIP} title='Add a new strip'>
        <FileUpload />
      </Link>
      <LoggedMenu className='loggedMenu' { ...other } />
    </div>
  )
}

LoginMenu.propTypes = {
  isLoggedIn: PropTypes.bool
}

export default LoginMenu
