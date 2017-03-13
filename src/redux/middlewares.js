import { applyMiddleware } from 'redux'

import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

const client = axios.create({
  baseURL: process.env.REACT_APP_HTTP_API,
  responseType: 'json'
})

const middlewares = applyMiddleware(axiosMiddleware(client))

export default middlewares
