import React from 'react'

import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'

const LoggedMenu = ({ username = '', logout, ...other }) => (
  <IconMenu
    {...other}
    iconButtonElement={
      <IconButton>
        <Avatar size={24}>
          { username.substr(0, 1).toUpperCase() }
        </Avatar>
      </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
  >
    <MenuItem primaryText='Edit profile' />
    <MenuItem primaryText='Sign out' onClick={logout} />
  </IconMenu>
)

export default LoggedMenu
