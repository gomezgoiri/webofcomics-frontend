import React from 'react'

import { PageWithMenu as Page } from './template'
import strips from './modules/strips'

const LastModifiedList = strips.components.LastModifiedList

const LandingPage = () => (
  <Page>
    <p>You might be wondering... what is this website for?</p>
    <p>[brief explanation] (for more info check our questions and answers section)</p>
    <LastModifiedList />
  </Page>
)


export default LandingPage
