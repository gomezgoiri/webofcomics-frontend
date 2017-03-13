import { combineReducers } from 'redux'
import strips from '../modules/strips'

const rootReducer = combineReducers({
  [strips.constants.NAME]: strips.reducer
})

export default rootReducer
