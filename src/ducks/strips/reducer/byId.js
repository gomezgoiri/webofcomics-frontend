import { actionTypes as ht } from 'httpGateway'

const byId = (state = {}, action) => {
  switch (action.type) {
    case ht.success(ht.LOAD_STRIPS):
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
