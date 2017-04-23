import { combineReducers } from 'redux'

import login from '../modules/login'
import strips from '../modules/strips'

const rootReducer = combineReducers({
  [login.constants.NAME]: login.reducer,
  [strips.constants.NAME]: strips.reducer
})

export default rootReducer
