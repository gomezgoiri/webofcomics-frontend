import React from 'react'

import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

class LoginDialog extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pass: '',
      validation: {
        user: false,
        pass: false
      }
    }
  }

  onUsernameChanged = username => {
    this.setState({
      user: username,
      validation: Object.assign({}, this.state.validation, { user: username.length > 4 })
    })
  }

  onPasswordChanged = passwd => {
    this.setState({
      pass: passwd,
      validation: Object.assign({}, this.state.validation, { pass: passwd.length > 4 })
    })
  }

  render () {
   const { authenticate, onClose, ...other} = this.props
    const actions = [
      <FlatButton
        label='Cancel'
        primary
        onClick={onClose}
      />,
      <FlatButton
        label='Submit'
        primary
        keyboardFocused
        disabled={!this.state.validation.user || !this.state.validation.pass}
        onClick={() => {
          authenticate({ username: this.state.user, password: this.state.pass })
          onClose()
        }}
      />
    ]

    return (
      <Dialog
        title='Login'
        actions={actions}
        modal={false}
        onRequestClose={onClose}
        {...other}
      >
        <p>Enter your credentials to log in to the website.</p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <TextField
            floatingLabelText='Username'
            errorText={this.state.validation.user ? undefined : 'Type 5 characters at least'}
            onChange={(e, v) => this.onUsernameChanged(v)}
          />
          <TextField
            floatingLabelText='Password'
            type='password'
            errorText={this.state.validation.pass ? undefined : 'Type 5 characters at least'}
            onChange={(e, v) => this.onPasswordChanged(v)}
          />
        </div>
      </Dialog>
    )
  }
}

export default LoginDialog
