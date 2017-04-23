import React, { PropTypes } from 'react'

const LastModifiedList = props => (
  <ul>
    { props.lastUpdates.map((u, i) => <li key={i}>{ u }</li>) }
  </ul>
)

LastModifiedList.propTypes = {
  lastUpdates: PropTypes.array
}

export default LastModifiedList
