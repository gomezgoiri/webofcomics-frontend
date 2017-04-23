import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as utils from '../../reducer'
import { loadStrips } from '../../actions'

import LastModifiedList from './LastModifiedList'

class ListLoader extends React.Component {
  componentWillMount () {
    this.props.loadStrips()
  }

  render () {
    return <LastModifiedList lastUpdates={this.props.lastUpdates} />
  }
}

ListLoader.propTypes = {
  lastUpdates: PropTypes.array,
  loadStrips: PropTypes.func
}

const mapStateToProps = state => ({
  lastUpdates: utils.getLastUpdates(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({ loadStrips }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ListLoader)
