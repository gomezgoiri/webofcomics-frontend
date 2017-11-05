import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { utils, actions } from 'ducks/auth'

import { createLoader } from 'components/DataLoader'

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
  const username = utils.getUsername(state)
  const isRetrievingUsername = utils.isRetrievingUsername(state)
  const isLoggedIn = utils.isLoggedIn(state)
  const needsToRetrieveUsername = username === null && !isRetrievingUsername

  return ({
    username,
    isRetrievingUsername,
    shouldLoad: isLoggedIn && needsToRetrieveUsername
  })
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    load: actions.loadUsername,
    logout: actions.unauthorize
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(createLoader(UsernameLoader))
