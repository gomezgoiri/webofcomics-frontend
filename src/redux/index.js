import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './rootReducer'
import middlewares from './middlewares'

let store
if (process.env.NODE_ENV === 'production') {
  store = createStore(rootReducer, middlewares)
} else {
  store = createStore(rootReducer, composeWithDevTools(middlewares))
}

export default store
