import { combineReducers } from 'redux'

import * as auth from 'ducks/auth'
import * as strips from 'ducks/strips'

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [strips.constants.NAME]: strips.reducer
})

export default rootReducer
