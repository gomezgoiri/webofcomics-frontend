import axios from 'axios'

const client = axios.create({
  baseURL: process.env.REACT_APP_HTTP_API,
  responseType: 'json'
})

const updateToken = (instance, token = null) => {
  if (token) {
    instance.defaults.headers.common['Authorization'] = 'JWT ' + token
  } else {
    delete instance.defaults.headers.common.Authorization
  }
}

const configureAccessToken = token => updateToken(client, token)
const removeAccessToken = () => updateToken(client)

export default client
export {
  configureAccessToken,
  removeAccessToken
}
