import React from 'react'
import { Footer } from 'rebass'
import { Flex, Box } from 'reflexbox'

// Header image source: https://unsplash.com/collections/388096/books?photo=rNNmnC67h7g
const CustomFooter = () => (
  <Footer>
    <Flex
      align='right'
      justify='space-between'
      col={12}
    >
      <Box mt={1} col={3}>
        <a href='https://github.com/gomezgoiri/webofcomics-frontend'>Github</a>
      </Box>
      <Box mt={1} col={3}>
        <a href='link2'>Questions and answers</a>
      </Box>
      <Box mt={1} col={3}>
        Footer placeholder
      </Box>
      <Box mt={1} col={3}>
        <a href='http://gomezgoiri.net'>About the author</a>
      </Box>
    </Flex>
  </Footer>
)

export default CustomFooter
