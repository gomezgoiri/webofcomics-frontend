
const storeToken = token => {
  sessionStorage.setItem('TOKEN', token)
}

const removeToken = token => {
  sessionStorage.removeItem('TOKEN')
}

const getToken = () => sessionStorage.getItem('TOKEN')

export {
  storeToken,
  removeToken,
  getToken
}
