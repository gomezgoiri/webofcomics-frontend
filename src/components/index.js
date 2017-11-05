import React from 'react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { PrivateRoute } from './login'

import { Header, Footer } from './template'
import Profile, { ROUTE as PROFILE } from './profile'
import LandingPage from './LandingPage'

const MainComponent = () => (
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={LandingPage}/>
      <PrivateRoute path={PROFILE} component={Profile}/>
      <Footer />
    </div>
  </Router>
)


export default MainComponent
