import { combineReducers } from 'redux'

import auth from '../ducks/auth'
import strips from '../modules/strips'

const rootReducer = combineReducers({
  [auth.constants.NAME]: auth.reducer,
  [strips.constants.NAME]: strips.reducer
})

export default rootReducer
