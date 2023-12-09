

/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
    //Case for push
    if(command.$push) {
      data.push(...command.$push)
      return data
    }
    //Case for set 
    else if(command.$set){
      return command.$set
    } 
    //Case for merge
    else if(command.$merge){
      if (typeof data != 'object' && data != null) {
        throw new Error('not object for $merge')
      }
      return {...data, ...command.$merge}
    } 
    //Case for apply
    else if(command.$apply){
      return command.$apply(data)
    } 
    // the main logic to recursive call nested objects
    else{
      // if it is an array 
      if(Array.isArray(data)){
        data[Object.keys(command)[0]] = update(data[Object.keys(command)[0]], Object.values(command)[0])
        return data
      }
      //else recursive call to object by passing destructure keys-values 
      else{
        let newObj = {...data}
        for(let key of Object.keys(command)){
          newObj[key] = update(newObj[key], command[key])
        }
        return newObj
      }
    }
  }