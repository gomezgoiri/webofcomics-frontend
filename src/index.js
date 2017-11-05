import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
// import getMuiTheme from 'material-ui/styles/getMuiTheme'
// <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>

import Root from './components'

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Root />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
