import * as c from './constants'
import * as t from './actionTypes'

const initialState = {
  username: null,
  isLogging: false,
  token: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.AUTHENTICATE:
      return Object.assign({}, state, { isLogging: true })

    case t.AUTHENTICATE_SUCCESS:
      return Object.assign({}, state, {
        token: action.payload.data.access_token,
        isLogging: false
      })

    case t.AUTHENTICATE_FAIL:
      return Object.assign({}, state, {
        token: action.payload.data.access_token,
        isLogging: false
      })

    case t.LOAD_USERNAME_SUCCESS:
      return Object.assign({}, state, { username: action.payload.data })

    default:
      return state
  }
}

export default reducer

// Selectors
const isLoggedIn = state => state[c.NAME].token !== null
const isLogging = state => state[c.NAME].isLogging
const getUsername = state => state[c.NAME].username

export {
  isLoggedIn,
  isLogging,
  getUsername
}
