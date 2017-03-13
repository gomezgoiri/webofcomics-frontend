import * as t from './actionTypes'

const loadStrips = () => ({
  type: t.LOAD_STRIPS,
  payload: {
    request: {
      url:'/strips'
    }
  }
})

export {
  loadStrips
}
