import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import auth from '../../ducks/auth'

import LoginDialog from './LoginDialog'

const mapStateToProps = state => ({
  open: auth.utils.isFormShown(state)
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    authenticate: auth.actions.authenticate,
    onClose: auth.actions.hideForm
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog)
