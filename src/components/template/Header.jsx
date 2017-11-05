import React from 'react'

import { Link } from 'react-router-dom'
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar'

import LoginMenu from './LoginMenu'
import LoginDialog from './LoginDialog'

// Header image source: https://unsplash.com/collections/388096/books?photo=rNNmnC67h7g
const Header = () => (
  <header>
    <Toolbar
      style={{
        backgroundImage: 'url("comic_header.jpg")',
        backgroundSize: 'cover'
      }}
    >
      <ToolbarGroup firstChild>
        <ToolbarTitle
          text={<Link to='/'>The web of comics</Link>}
          style={{
            marginLeft: '1em',
            fontFamily: "'Bubblegum Sans', cursive",
          }}
        />
      </ToolbarGroup>
      <ToolbarGroup>
        <LoginMenu />
      </ToolbarGroup>
    </Toolbar>
    <LoginDialog />
  </header>
)

export default Header
