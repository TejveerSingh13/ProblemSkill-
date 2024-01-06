function race(promises) {
    // your code here
    if(!promises.length) throw Error('No promises were passed!')
  
    return new Promise((resolve, reject) => {
      promises.forEach((promise) => {
        Promise.resolve(promise)
        .then((data) => resolve(data))
        .catch((error) => reject(error))
      })
    })
  }