import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions } from 'ducks/strips'

import NewStrip from './NewStrip'

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    onCreate: actions.createStrip
  }, dispatch)
)

export default connect(undefined, mapDispatchToProps)(NewStrip)

export const ROUTE = '/new-strip'
