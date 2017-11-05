import { actionTypes as ht } from 'httpGateway'
import * as c from '../constants'

const lastUpdatedStrips = (state = ['a', 'b', 'c'], action) => {
  switch (action.type) {
    case ht.success(ht.STRIPS):
      return action.payload.data.map(strip => strip.name)

    default:
      return state
  }
}

export const MOUNT_AT = 'lastUpdated'
export default lastUpdatedStrips

// Selectors
const getLastUpdates = state => state[c.NAME][MOUNT_AT]

export {
  getLastUpdates
}
