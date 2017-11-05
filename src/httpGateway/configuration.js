import axiosInstance from './client'
import {
  createLoggingInterceptor,
  createUnauthorizationInterceptor
} from './interceptorCreators'

const currentInterceptors = {
  log: null,
  unauthorization: null
}

const addInterceptor = errorInterceptor =>
  axiosInstance.interceptors.response.use(
    response => response,
    errorInterceptor
  )

const removeInterceptor = interceptor => {
  axiosInstance.interceptors.response.eject(interceptor)
}

const setErrorLoggingAction = action => {
  removeInterceptor(currentInterceptors.log)
  currentInterceptors.log = addInterceptor(createLoggingInterceptor(action))
}

const setUnauthorizationAction = action => {
  removeInterceptor(currentInterceptors.unauthorization)
  const newInterceptor = createUnauthorizationInterceptor(action)
  currentInterceptors.unauthorization = addInterceptor(newInterceptor)
}

setErrorLoggingAction((category, msg) => console.error(msg))
setUnauthorizationAction(() => console.error('Unauthorized user'))

export { setErrorLoggingAction, setUnauthorizationAction }
