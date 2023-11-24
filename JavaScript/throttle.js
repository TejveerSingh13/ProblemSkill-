function throttle(func, wait) {
    let waiting = false, lastArgs = null
    return function throttled(...args){
      if(!waiting){
        func(...args)
        waiting = true
        let timeout = () => setTimeout(()=>{
          waiting = false
          if(lastArgs){
            func(...lastArgs)
            waiting = true
            lastArgs = null
            timeout()
          }
        }, wait)
        timeout()
      }
      else lastArgs = args
    }
  }  