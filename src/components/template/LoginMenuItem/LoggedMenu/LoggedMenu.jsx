import React from 'react'

import { NavLink, withRouter } from 'react-router-dom'

import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Avatar from 'material-ui/Avatar'

import { ROUTE as PROFILE } from 'components/profile'

const LoggedMenu = ({ username = '', logout, history, staticContext, ...other }) => (
  <IconMenu
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
    <MenuItem
      {...other}
      primaryText={
        <NavLink
          to={PROFILE}
          activeClassName='selected'
        >
          Edit profile
        </NavLink>
      }
      onClick={() => history.push(PROFILE)}
    />
    <MenuItem primaryText='Sign out' onClick={logout} />
  </IconMenu>
)

export default withRouter(LoggedMenu)
