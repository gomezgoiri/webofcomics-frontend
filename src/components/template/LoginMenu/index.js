import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import { utils, actions } from 'ducks/auth'

import LoginMenu from './LoginMenu'

const mapStateToProps = state => ({
  isLoggedIn: utils.isLoggedIn(state)
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onLoginClick: actions.showForm
  }, dispatch)
)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginMenu))
