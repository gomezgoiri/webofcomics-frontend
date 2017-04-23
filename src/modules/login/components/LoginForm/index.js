import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as utils from '../../reducer'
import { authenticate } from '../../actions'

import LoginForm from './LoginForm'

const mapStateToProps = state => ({
  isLogging: utils.isLogging(state),
  isLoggedIn: utils.isLoggedIn(state)
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({ authenticate }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
