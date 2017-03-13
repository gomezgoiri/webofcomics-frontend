import React from 'react'
import { Container, Section, Button } from 'rebass'
import { Flex, Box } from 'reflexbox'

import { Header, Footer } from './template'
import strips from './modules/strips'

const LastModifiedList = strips.components.LastModifiedList

// Header image source: https://unsplash.com/collections/388096/books?photo=rNNmnC67h7g
const LandingPage = () => (
  <div>
    <Header />
    <Container>
      <Section>
        <p>You might be wondering... what is this website for?</p>
        <p>[brief explanation] (for more info check our questions and answers section)</p>
        <LastModifiedList />
        <Flex
          align='center'
          justify='space-between'
          mt={4}
          ml={4}
          col={10}
        >
          <Box>
            <Button backgroundColor='primary'>
              Translate a comic now
            </Button>
          </Box>
          <Box>
            <Button backgroundColor='primary'>
              Look for an existing comic
            </Button>
          </Box>
        </Flex>
      </Section>
      <Footer />
    </Container>
  </div>
)

export default LandingPage
