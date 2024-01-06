function any(promises) {
    // your code here
    if(!promises.length) throw new AggregateError("No Promises were passed")
  
    return new Promise((resolve, reject) => {
      let errorcount = 0, errors = []
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
        .then((data) => resolve(data))
        .catch((err) => {
            errors[index] = err
            errorcount++
            if(errorcount === promises.length)  reject(new AggregateError('No Promise in Promise.any was resolved', 
    errors))
        })
      })
    })
  }