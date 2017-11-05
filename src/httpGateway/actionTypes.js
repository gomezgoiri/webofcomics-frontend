import { SUCCESS_SUFFIX, ERROR_SUFFIX } from 'redux-axios-middleware'
const prefix = 'http/'

// Methods to generate action types used in external reducers
export const success = type => type + SUCCESS_SUFFIX
export const fail = type => type + ERROR_SUFFIX

// Types

export const AUTHENTICATE = prefix + 'AUTHENTICATE'
export const LOAD_USERNAME = prefix + 'LOAD_USERNAME'

export const STRIPS = prefix + 'STRIPS'
