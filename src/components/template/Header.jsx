import React from 'react'

import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'

import LoginMenuItem from './LoginMenuItem'
import { LoginDialog } from '../login'

// Header image source: https://unsplash.com/collections/388096/books?photo=rNNmnC67h7g
const Header = () => (
  <header>
    <AppBar
      title={
        <Link to='/'>The web of comics</Link>
      }
      showMenuIconButton={false}
      style={{
        backgroundImage: 'url("comic_header.jpg")',
        backgroundSize: 'cover'
      }}
      titleStyle={{
        color: 'white',
        fontFamily: "'Bubblegum Sans', cursive",
      }}
      iconElementRight={<LoginMenuItem />}
    />
    <LoginDialog />
  </header>
)

export default Header
