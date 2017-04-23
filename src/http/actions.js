import * as t from './actionTypes'

const authenticate = (username, password) => ({
  type: t.AUTHENTICATE,
  payload: {
    request: {
      method: 'post',
      url:'/auth',
      responseType: 'json',
      data: {
        username,
        password
      }
    }
  }
})

const loadUsername = () => ({
  type: t.LOAD_USERNAME,
  payload: {
    request: {
      url:'/user'
    }
  }
})

const loadStrips = () => ({
  type: t.LOAD_STRIPS,
  payload: {
    request: {
      url:'/strips'
    }
  }
})

export {
  authenticate,
  loadUsername,
  loadStrips
}
