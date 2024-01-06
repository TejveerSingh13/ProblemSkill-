
/**
 * @param {Array<any>} promises - notice that input might contains non-promises
 * @return {Promise<Array<{status: 'fulfilled', value: any} | {status: 'rejected', reason: any}>>}
 */
function allSettled(promises) {
    // your code here
    if(promises.length === 0) return Promise.resolve([])
    let result = [], count = 0
    return new Promise((resolve) => {
      
      for(let i = 0; i<promises.length; i++){
        Promise.resolve(promises[i])
        .then(value =>{
            result[i] = {status: 'fulfilled', value}
        })
        .catch(reason => {
          result[i] = {status: 'rejected', reason}
        })
        .finally(()=>{
          count++
          if(count === promises.length) resolve(result)
        })
      }
    })
  }
  
  