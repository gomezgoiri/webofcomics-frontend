import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { createLoader } from '../../../../components/DataLoader'

import * as utils from '../../reducer'
import { loadUsername } from '../../actions'

import LoggedMenu from './LoggedMenu'
import { Menu } from 'antd'

const UsernameLoader = ({ isLoggedIn, isRetrievingUsername, ...other }) => {
  if (isLoggedIn) {
    if (isRetrievingUsername) {
      return <span>Loading user profile...</span>
    } else {
      return <LoggedMenu { ...other } />
    }
  } else {
    return <Menu.Item { ...other }>Log in</Menu.Item>
  }
}

UsernameLoader.propTypes = {
  isLoggedIn: PropTypes.bool,
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
    isLoggedIn,
    shouldLoad: isLoggedIn && needsToRetrieveUsername
  })
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    load: loadUsername
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(createLoader(UsernameLoader))
