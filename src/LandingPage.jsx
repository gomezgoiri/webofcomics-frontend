import React from 'react'

import { PageWithMenu as Page } from './template'
import login from './modules/login'
import strips from './modules/strips'

const LoginForm = login.components.LoginForm
const LastModifiedList = strips.components.LastModifiedList

const LandingPage = () => (
  <Page>
    <p>You might be wondering... what is this website for?</p>
    <p>[brief explanation] (for more info check our questions and answers section)</p>
    <LastModifiedList />
    <LoginForm />
  </Page>
)


export default LandingPage
