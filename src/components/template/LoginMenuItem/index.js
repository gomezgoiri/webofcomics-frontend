import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import FlatButton from 'material-ui/FlatButton'

import { utils, actions } from 'ducks/auth'
import LoggedMenu from './LoggedMenu'

import './menu.css'

const LoginMenuItem = ({
  isLoggedIn,
  onLoginClick,
  ...other
}) => {
  if (isLoggedIn) {
    return <LoggedMenu className='loggedMenu' { ...other } />
  } else {
    return <FlatButton onClick={onLoginClick} label='Login' style={{ color: '#fff' }} />
  }
}

LoginMenuItem.propTypes = {
  isLoggedIn: PropTypes.bool
}

const mapStateToProps = state => ({
  isLoggedIn: utils.isLoggedIn(state)
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onLoginClick: actions.showForm
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginMenuItem))
