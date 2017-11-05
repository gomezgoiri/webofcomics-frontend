import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { utils, actions } from 'ducks/auth'

import LoginDialog from './LoginDialog'

const mapStateToProps = state => ({
  open: utils.isFormShown(state)
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    authenticate: actions.authenticate,
    onClose: actions.hideForm
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)
