function memo(func, resolver) {
    // your code here
    let cache = new Map()
    return function(...args) {
      // cacheKey is kind of an identifier for a given set of argument.
      // You can consider this as a hash.
      let cacheKey = resolver ? resolver(...args) : args.join('_')
      // Check if we have any entry with the above hash in cache
      let cachedvalue = cache.get(cacheKey)
      //now depending on the value in cachedvalue
      // 1. Check if there is any entry for the the given set of argument
      if(!cachedvalue){
        //there is no entry in the cache with the given hash for the set of arguments
        //therefore we create an entry
        let val = func.apply(this, args)
        // create an entry for the given hash and function 
        // the structure is hash and a map of function and its result for the given args
        cache.set(cacheKey, new Map([[this, val]]))
        return val
      }
      // 2. if an entry exist on the has "cachedValue" ? check if it is for the current cintext function
      if(cachedvalue.has(this)) return cachedvalue.get(this)
      // 3. else we just create a map entry for the context funtion for this set of hash
      let val = func.call(this, args)
      cachedvalue.set(this, val)
      return val
    }
  }