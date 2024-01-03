
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
function parallel(funcs){
    //saving all promisify funcs in promiseFuncs variable
    let promiseFuncs = funcs.map((func) => promisify(func))
  
    //returning an async func
    return async function(callback, data){
      //this function will loop over all promiseFuncs and save data in an data array
      try{
          let result = await Promise.all(promiseFuncs.map((func) => func(data)))
          callback(undefined, result)
      }catch(error){
          callback(error, undefined)
      }
    }
  }
  
  function promisify(func) {
    return function(...args){
      return new Promise((res,rej) => {
          func((error, data)=>{
            if(error) rej(error)
            else res(data)
          }, ...args)
      })
    }
  }