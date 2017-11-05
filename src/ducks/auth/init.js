import { configureAccessToken, setUnauthorizationAction } from 'httpGateway'

import store from '../../redux'
import { unauthorize } from './actions'

export default token => {
  if (token) {
    configureAccessToken(token)
  }
  setUnauthorizationAction(() => store.dispatch(unauthorize()))
}
