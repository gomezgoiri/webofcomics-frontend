import { configureAccessToken, setUnauthorizationAction } from '../../http'

import store from '../../redux'
import { unauthorize } from './actions'

export default token => {
  if (token) {
    configureAccessToken(token)
  }
  setUnauthorizationAction(() => store.dispatch(unauthorize()))
}
