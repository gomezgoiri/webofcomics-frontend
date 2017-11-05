import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import auth from '../../../ducks/auth'

import { PrivateRoute } from './PrivateRoute'

const mapStateToProps = state => ({
  isLogged: auth.utils.isLoggedIn(state)
})

export default withRouter(connect(mapStateToProps)(PrivateRoute))
