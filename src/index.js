import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux'

import Theme from './Theme'
import LandingPage from './LandingPage'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <Theme>
      <LandingPage />
    </Theme>
  </Provider>,
  document.getElementById('root')
)
