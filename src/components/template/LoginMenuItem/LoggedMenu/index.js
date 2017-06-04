import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import auth from '../../../../ducks/auth'

import { createLoader } from '../../../DataLoader'

import CircularProgress from 'material-ui/CircularProgress'
import LoggedMenu from './LoggedMenu'

const UsernameLoader = ({
  username,
  isRetrievingUsername,
  ...other
}) => {
  if (isRetrievingUsername || username === null) {
    return <CircularProgress />
  } else {
    return <LoggedMenu username={username} {...other} />
  }
}

UsernameLoader.propTypes = {
  isRetrievingUsername: PropTypes.bool,
  username: PropTypes.string
}

const mapStateToProps = state => {
  const username = auth.utils.getUsername(state)
  const isRetrievingUsername = auth.utils.isRetrievingUsername(state)
  const isLoggedIn = auth.utils.isLoggedIn(state)
  const needsToRetrieveUsername = username === null && !isRetrievingUsername

  return ({
    username,
    isRetrievingUsername,
    shouldLoad: isLoggedIn && needsToRetrieveUsername
  })
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    load: auth.actions.loadUsername,
    logout: auth.actions.unauthorize
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(createLoader(UsernameLoader))
