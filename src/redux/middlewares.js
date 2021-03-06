import { applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import axiosMiddleware from 'redux-axios-middleware'
import { client } from 'httpGateway'

const middlewares = applyMiddleware(thunk, axiosMiddleware(client))

export default middlewares
