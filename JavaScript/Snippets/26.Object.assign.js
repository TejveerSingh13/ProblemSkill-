
/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
    if(!target) throw Error()
  
    target = Object(target)
  
    for(let source of sources){
  
      if(source == null) continue
  
      merge(Object.keys(source), source)
      //IMPORTANT!! cause symbol keys are non iterable
      merge(Object.getOwnPropertySymbols(source), source);
    }
  
    function merge(keys = [], currentSource) {
      for(let key of keys){
        target[key] = currentSource[key]
        if(target[key] !== currentSource[key]){
          throw Error()
        }
      }
    }
  
    return target
  }