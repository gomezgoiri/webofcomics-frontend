import { createAction } from 'redux-actions'
import * as t from './actionTypes'

import * as cache from './cache'
import { actions, configureAccessToken, removeAccessToken } from 'httpGateway'

const showForm = createAction(t.SHOW_FORM)
const hideForm = createAction(t.HIDE_FORM)

const completeLoginProcess = createAction(t.LOGIN_COMPLETED)
const unauthorizeAction = createAction(t.UNAUTHORIZE)

const authenticate = ({ username, password })  => dispatch => {
  dispatch(actions.auth.authenticate(username, password))
    .then(successAction => {
      const token = successAction.payload.data.access_token
      cache.storeToken(token)
      configureAccessToken(token)
      // To make sure that no request is made before the previous configuration
      // has taken place.
      dispatch(completeLoginProcess(token))
    })
    .catch(() => {
      cache.removeToken()
      removeAccessToken()
    })
}

const unauthorize = () => dispatch => {
  cache.removeToken()
  removeAccessToken()
  dispatch(unauthorizeAction())
}

const loadUsername = actions.auth.loadUsername

export {
  showForm,
  hideForm,
  unauthorize,
  authenticate,
  loadUsername
}
