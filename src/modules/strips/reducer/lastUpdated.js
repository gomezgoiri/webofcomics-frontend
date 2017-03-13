import * as t from '../actionTypes'
import * as c from '../constants'

const lastUpdatedStrips = (state = ['a', 'b', 'c'], action) => {
  switch (action.type) {
    case t.LOAD_STRIPS_SUCCESS:
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
