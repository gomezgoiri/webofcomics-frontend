
const urlExists = url => new Promise((resolve, reject) => {
  const img = new Image()
  img.onload = () => resolve(true)
  img.onerror = () => reject(false)
  img.src = url
})

export {
  urlExists
}
