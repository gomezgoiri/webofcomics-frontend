import React from 'react'
import PropTypes from 'prop-types'

import TextField from 'material-ui/TextField'
import Button from 'material-ui/RaisedButton'

class NewStrip extends React.Component {
  constructor() {
    super()
    this.state = {
      url: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Create new strip</h2>
        <TextField
          hintText='Type the URL of the strip'
          floatingLabelText='Image URL'
          onChange={(e, u) => {
            this.setState({ url: u })
          }}
          defaultValue={this.state.url}
        />
        <Button
          label='Save'
          onClick={() => this.props.onCreate(this.state.url)}
        />
      </div>
    )
  }
}

NewStrip.propTypes = {
  onCreate: PropTypes.func
}

export default NewStrip
