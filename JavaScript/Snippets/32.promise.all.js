
/**
 * @param {Array<any>} promises - notice input might have non-Promises
 * @return {Promise<any[]>}
 */
function all(promises) {
    // your code here
    return new Promise((res, rej) => {
      let result = []
      let promiseCount = promises.length
  
      if(promiseCount === 0) res(result)
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise).then((data)=>{
          result[index] = data
          promiseCount--
          if(promiseCount === 0) res(result)
        }, rej)
      })
    })
  }