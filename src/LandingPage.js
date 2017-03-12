import React from 'react'
import { Header, Footer } from './template'
import { Container, Section, Button } from 'rebass'
import { Flex } from 'reflexbox'

// Header image source: https://unsplash.com/collections/388096/books?photo=rNNmnC67h7g
const LandingPage = () => (
  <div>
    <Header />
    <Container>
      <Section>
        <p>You might be wondering... what is this website for?</p>
        <p>[brief explanation] (for more info check our questions and answers section)</p>
        <Flex
          align='center'
          justify='space-between'
          mt={4}
          ml={4}
          col={10}
        >
          <Button
            backgroundColor='primary'
          >
            Translate a comic now
          </Button>
          <Button
            backgroundColor="primary"
            color="white"
            inverted
            rounded
          >
            Look for an existing comic
          </Button>
        </Flex>
      </Section>
      <Footer />
    </Container>
  </div>
)

export default LandingPage
