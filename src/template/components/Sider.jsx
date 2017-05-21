import React from 'react'
import { Layout, Menu, Icon } from 'antd'

import login from '../../modules/login'
const LoginMenuItem = login.components.LoginMenuItem

import './theme.css'

const CustomSider = () => (
  <Layout.Sider
    breakpoint='lg'
    collapsedWidth='0'
  >
    <div className='logo' />
    <Menu
      theme='dark'
      mode='inline'
    >
      <LoginMenuItem key='user' />
      <Menu.Divider />
      <Menu.SubMenu
        key='sub2'
        title={<span><Icon type='team' /><span className='nav-text'>Team</span></span>}
      >
        <Menu.Item key='4'>Team 1</Menu.Item>
        <Menu.Item key='5'>Team 2</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key='6'>
        <span>
          <Icon type='file' />
          <span className='nav-text'>File</span>
        </span>
      </Menu.Item>
    </Menu>
  </Layout.Sider>
)

CustomSider.__ANT_LAYOUT_SIDER = true

export default CustomSider
