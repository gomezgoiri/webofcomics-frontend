import React from 'react'

import AppBar from 'material-ui/AppBar'

import LoginMenuItem from './LoginMenuItem'
import LoginDialog from '../LoginDialog'

// Header image source: https://unsplash.com/collections/388096/books?photo=rNNmnC67h7g
const Header = () => (
  <div>
    <AppBar
      title='The web of comics'
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
  </div>
)

export default Header
