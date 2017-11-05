import { combineReducers } from 'redux'

import byId, { MOUNT_AT as IMOUNT } from './byId'
import lastUpdated, { MOUNT_AT as LMOUNT } from './lastUpdated'

export default combineReducers({
  [IMOUNT]: byId,
  [LMOUNT]: lastUpdated
})

export { getLastUpdates } from './lastUpdated'
