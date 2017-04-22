import React from 'react'
import { Layout } from 'antd'

// Header image source: https://unsplash.com/collections/388096/books?photo=rNNmnC67h7g
const Header = () => (
  <Layout.Header
    style={{
      padding: 0,
      textAlign: 'center',
      backgroundImage: 'url("comic_header.jpg")'
    }}
  >
    <h1
      style={{
        color: 'white',
        fontFamily: "'Bubblegum Sans', cursive"
      }}
    >
      The Web of Comics
    </h1>
  </Layout.Header>
)

export default Header
