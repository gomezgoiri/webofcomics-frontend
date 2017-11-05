import { AUTHENTICATE, LOAD_USERNAME } from '../actionTypes'

const authenticate = (username, password) => ({
  type: AUTHENTICATE,
  payload: {
    request: {
      method: 'post',
      url: '/auth',
      responseType: 'json',
      data: {
        username,
        password
      }
    }
  }
})

const loadUsername = () => ({
  type: LOAD_USERNAME,
  payload: {
    request: {
      url: '/user'
    }
  }
})

export { authenticate, loadUsername }
