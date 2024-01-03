/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/

/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function race(funcs){
    // your code here
    let promisefuncs = funcs.map((func) => promisify(func))
    return async function (callback, data){
        try{
          let result = await Promise.race(promisefuncs.map((func) => func(data)))
          callback(undefined, result)
        }catch(error){
          callback(error, undefined)
        }
    }
  }
  
  const promisify = func => (...args) => new Promise((res,rej) => {
    func((error, result) =>{
      if(error) rej(error)
      else res(result)
    }, ...args)
  })
  