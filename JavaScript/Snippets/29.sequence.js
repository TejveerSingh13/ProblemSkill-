/**
 * @param {AsyncFunc[]} funcs
 * @return {(callback: Callback) => void}
 */
function sequence(funcs){
    return function(callback, data){
      let nextFunctionIndex = 0
      const callNextFunc = (data) => {
        if(nextFunctionIndex === funcs.length){
          callback(undefined, data)
          return 
        }
        const nextFunc = funcs[nextFunctionIndex]
        nextFunctionIndex++
  
        nextFunc((error, newData) => {
          if(error) callback(error, undefined)
          else callNextFunc(newData)
        }, data)
      }
      callNextFunc(data)
    }
  }