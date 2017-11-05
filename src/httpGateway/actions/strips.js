import { STRIPS } from '../actionTypes'

const getAll = () => ({
  type: STRIPS,
  payload: {
    request: {
      url: '/strips'
    }
  }
})

const create = (url) => ({
  type: STRIPS,
  payload: {
    request: {
      method: 'post',
      url: '/strips',
      responseType: 'json',
      data: {
        url
      }
    }
  }
})

export { getAll, create }
