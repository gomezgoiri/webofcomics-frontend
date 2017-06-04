import React from 'react'
import PropTypes from 'prop-types'

const LastModifiedList = props => (
  <ul>
    { props.lastUpdates.map((u, i) => <li key={i}>{ u }</li>) }
  </ul>
)

LastModifiedList.propTypes = {
  lastUpdates: PropTypes.array
}

export default LastModifiedList
