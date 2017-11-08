import React from 'react'
import PropTypes from 'prop-types'

import debounce from 'lodash.debounce'
import { urlExists } from 'utils'

import TextField from 'material-ui/TextField'
import Button from 'material-ui/RaisedButton'

class NewStrip extends React.Component {
  constructor() {
    super()
    this.state = {
      strip: {
        url: ''
      },
      isValidUrl: true,
      pictureExists: false
    }
  }

  get url () {
    return this.state.strip.url
  }

  get picture () {
    if (this.state.isValidUrl && this.state.pictureExists) {
      return <img src={this.state.strip.url} alt='Comic strip' />
    }
    return <div /> /* Invalid URL */
  }

  isValidUrl = u => (
    // Tested here: https://regex101.com
    /^(http(s?)):\/\/[-a-zA-Z0-9@:%_+.~#?&/=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&/=]*)?.(png|jpg|gif)(\?[-a-zA-Z0-9@:%_+.~#&/=]*)?$/gi.test(u)
  )

  setStrip = s => {
    this.setState({
      strip: Object.assign({}, this.state.strip, s)
    })
  }

  changeUrl = debounce(u => {
    if (u !== this.url) {
      this.setStrip({ url: u })

      const isValidUrl = u === '' || this.isValidUrl(u)
      this.setState({
        isValidUrl,
        pictureExists: false  // Just in case
      })

      if (isValidUrl) {
        urlExists(u)
          .then(a => {
            if (this.url === u) {
              this.setState({
                pictureExists: true
              })
            }
            // Ignore it: cancelation
          })
          .catch(() => {
            if (this.url === u) {
              this.setState({
                pictureExists: false // Already set, but anyway...
              })
            }
            // Ignore it: cancelation
          })
      }
    }
  }, 1000)

  render() {
    return (
      <div>
        <h2>Create new strip</h2>
        <TextField
          floatingLabelText='Image URL'
          defaultValue={this.url}
          hintText='Type the URL of the strip'
          errorText={this.state.isValidUrl ? undefined : 'Invalid picture URL'}
          onChange={(e, u) => this.changeUrl(u)}
        />
        <Button
          label='Save'
          onClick={() => this.props.onCreate(this.state.url)}
        />
        { this.picture }
      </div>
    )
  }
}

NewStrip.propTypes = {
  onCreate: PropTypes.func
}

export default NewStrip
