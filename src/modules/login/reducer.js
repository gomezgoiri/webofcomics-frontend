import * as c from './constants'
import * as t from './actionTypes'

import { actionTypes as ht } from '../../http'
import init from './init'
import { getToken } from './cache'

const token = getToken()

const initialState = {
  token,
  username: null,
  isLogging: false,
  isRetrievingUsername: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // FIXME ugly patch to avoid circular dependencies
    case '@@INIT':
      init(token)
      break

    case t.UNAUTHORIZE:
      return Object.assign({}, state, { token: null })

    case ht.AUTHENTICATE:
      return Object.assign({}, state, { isLogging: true })

    case ht.success(ht.AUTHENTICATE):
      return Object.assign({}, state, {
        token: action.payload.data.access_token,
        isLogging: false
      })

    case ht.fail(ht.AUTHENTICATE):
      return Object.assign({}, state, {
        token: action.payload.data.access_token,
        isLogging: false
      })

    case ht.LOAD_USERNAME:
      return Object.assign({}, state, { isRetrievingUsername: true })

    case ht.success(ht.LOAD_USERNAME):
      return Object.assign({}, state, {
        username: action.payload.data,
        isRetrievingUsername: false
      })

    case ht.fail(ht.LOAD_USERNAME):
      return Object.assign({}, state, {
        username: null,
        isRetrievingUsername: false
      })

    default:
  }

  return state
}

export default reducer

// Selectors
const isLoggedIn = state => state[c.NAME].token !== null
const isLogging = state => state[c.NAME].isLogging
const isRetrievingUsername = state => state[c.NAME].isRetrievingUsername
const getUsername = state => state[c.NAME].username

export {
  isLoggedIn,
  isLogging,
  isRetrievingUsername,
  getUsername
}
