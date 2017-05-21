import React, { PropTypes } from 'react'

class DataLoader extends React.Component {
  componentWillMount () {
    if (this.props.shouldLoad) {
      this.props.load()
    }
  }

  componentDidUpdate () {
    if (this.props.shouldLoad) {
      this.props.load()
    }
  }

  render () {
    return this.props.children
  }
}

DataLoader.propTypes = {
  shouldLoad: PropTypes.bool,
  load: PropTypes.func
}

const createLoader = WrappedComponent => ({ shouldLoad, load, ...other }) => (
  <DataLoader load={load} shouldLoad={shouldLoad}>
    <WrappedComponent { ...other } />
  </DataLoader>
)

export {
  createLoader
}
