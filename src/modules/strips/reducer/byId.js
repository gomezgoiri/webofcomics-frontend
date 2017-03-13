import * as t from '../actionTypes'

const byId = (state = {}, action) => {
  switch (action.type) {
    case t.LOAD_STRIPS_SUCCESS:
      return action.payload.data.reduce((ret, strip) => {
        ret[strip.url] = strip
        return ret
      }, {})

    default:
      return state
  }
}

export const MOUNT_AT = 'byId'
export default byId
