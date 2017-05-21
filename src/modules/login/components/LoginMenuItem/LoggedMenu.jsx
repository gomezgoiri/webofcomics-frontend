import React, { PropTypes } from 'react'
import { Menu, Icon } from 'antd'

const LoggedMenu = ({ username, ...other }) => (
  <Menu.SubMenu
    title={
      <span>
        <Icon type='user' />
        <span className='nav-text'>Hello { username }</span>
      </span>
    }
    { ...other }
  >
    <Menu.Item key='edit'>Edit profile</Menu.Item>
    <Menu.Item key='logout'>Log out</Menu.Item>
  </Menu.SubMenu>
)

LoggedMenu.propTypes = {
  username: PropTypes.string
}

LoggedMenu.isSubMenu = 1

export default LoggedMenu
