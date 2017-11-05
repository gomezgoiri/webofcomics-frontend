import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

import { Header, Footer } from './template'
import Profile, { ROUTE as PROFILE } from './profile'
import StripCreation, { ROUTE as NEW_STRIP } from './creation'
import LandingPage from './LandingPage'

const MainComponent = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={LandingPage} />
      <PrivateRoute path={PROFILE} component={Profile} />
      <PrivateRoute path={NEW_STRIP} component={StripCreation} />
      <Footer />
    </div>
  </Router>
)

export default MainComponent
