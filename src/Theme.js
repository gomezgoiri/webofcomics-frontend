import React from 'react'
import LandingPage from './LandingPage'

const baseColors = {
  black: '#111',
  white: '#fff',
  gray: '#ddd',
  midgray: '#888',
  blue: '#08e',
  red: '#f52',
  orange: '#f70',
  green: '#1c7'
}

const colors = {
  ...baseColors,
  primary: baseColors.orange,
  secondary: baseColors.midgray,
  default: baseColors.black,
  info: baseColors.blue,
  success: baseColors.green,
  warning: baseColors.orange,
  error: baseColors.red
}

class Theme extends React.Component {
  getChildContext () {
    return {
      rebass: {
        colors,
        fontSizes: [ 64, 48, 24, 18, 16, 14, 12],
        Button: {
          borderRadius: 25,
          backgroundColor: 'tomato'
        }
      }
    }
  }

  render () {
    return <LandingPage />
  }
}

Theme.childContextTypes = {
  rebass: React.PropTypes.object
}

export default Theme
