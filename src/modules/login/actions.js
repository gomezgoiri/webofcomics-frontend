import * as t from './actionTypes'

const authenticate = ({ username, password }) => ({
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

// TODO Configure interceptor

const loadUsername = () => ({
  type: t.LOAD_USERNAME,
  payload: {
    request: {
      url:'/user'
    }
  }
})

export {
  authenticate,
  loadUsername
}
