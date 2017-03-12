import React from 'react'
import { Banner, Heading } from 'rebass'

// Header image source: https://unsplash.com/collections/388096/books?photo=rNNmnC67h7g
const Header = () => (
  <Banner
    align='center'
    backgroundImage='comic_header.jpg'
    style={{ minHeight: '30vh' }}
  >
    <Heading
      level={1}
      size={0}
      style={{ fontFamily: "'Bubblegum Sans', cursive" }}
    >
      The Web of Comics
    </Heading>
  </Banner>
)

export default Header
