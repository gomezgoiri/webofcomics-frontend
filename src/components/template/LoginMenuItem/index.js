import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import auth from '../../../ducks/auth'

import FlatButton from 'material-ui/FlatButton'
import LoggedMenu from './LoggedMenu'

const LoginMenuItem = ({
  isLoggedIn,
  onLoginClick,
  ...other
}) => {
  if (isLoggedIn) {
    return <LoggedMenu />
  } else {
    return <FlatButton onClick={onLoginClick} label='Login' />
  }
}

LoginMenuItem.propTypes = {
  isLoggedIn: PropTypes.bool
}

const mapStateToProps = state => ({
  isLoggedIn: auth.utils.isLoggedIn(state)
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onLoginClick: auth.actions.showForm
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginMenuItem)
