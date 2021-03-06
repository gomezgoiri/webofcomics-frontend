import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { actions, utils } from 'ducks/strips'

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

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadStrips: actions.loadStrips
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ListLoader)
