import { actions } from 'httpGateway'

const loadStrips = actions.strips.getAll
const createStrip = actions.strips.create

export {
  loadStrips,
  createStrip
}
