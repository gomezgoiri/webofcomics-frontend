import { createAction } from 'redux-actions'
import * as t from './actionTypes'

import * as cache from './cache'
import { actions, configureAccessToken, removeAccessToken } from '../../http'

const unauthorize = createAction(t.UNAUTHORIZE)

const authenticate = ({ username, password })  => dispatch => {
  dispatch(actions.authenticate(username, password))
    .then(successAction => {
      const token = successAction.payload.data.access_token
      cache.storeToken(token)
      configureAccessToken(token)
    })
    .catch(() => {
      cache.removeToken()
      removeAccessToken()
    })
}

const loadUsername = actions.loadUsername

export {
  unauthorize,
  authenticate,
  loadUsername
}
