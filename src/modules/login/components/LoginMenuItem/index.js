import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as utils from '../../reducer'
import { loadUsername } from '../../actions'

import LoginMenuItem from './LoginMenuItem'

class UsernameLoader extends React.Component {
  componentWillMount () {
    if (this.props.isLoggedIn) {
      this.props.loadUsername()
    }
  }

  componentDidUpdate () {
    if (this.props.isLoggedIn) {
      this.props.loadUsername()
    }
  }

  render () {
    const { ...props } = this.props
    delete props.loadUsername
    return <LoginMenuItem { ...props } />
  }
}

UsernameLoader.propTypes = {
  username: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  loadUsername: PropTypes.func
}

const mapStateToProps = state => ({
  username: utils.getUsername(state),
  isLoggedIn: utils.isLoggedIn(state)
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ loadUsername }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(UsernameLoader)
