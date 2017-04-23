
const createLoggingInterceptor = log => {
  return error => {
    if (error.response) {
      log(
        'http',
        error.response.data.error + ' (' + error.response.status + ') ' +
        ' on ' + error.response.data.path
      )
    } else {
      log('http', error.message)
    }
    // Problem:
    //  - If we don't reject something here, we will enter in a 'then' afterwards.
    //  - Returning the error, we force to catch all the requests or
    //    an error will be thrown in the console.
    return Promise.reject(error)
  }
}

const createUnauthorizationInterceptor = unauthorize => {
  return error => {
    if (error.response && error.response.status === 401) {
      unauthorize()
    }
    // Problem:
    //  - If we don't reject something here, we will enter in a 'then' afterwards.
    //  - Returning the error, we force to catch all the requests or
    //    an error will be thrown in the console.
    return Promise.reject(error)
  }
}

export {
  createLoggingInterceptor,
  createUnauthorizationInterceptor
}
