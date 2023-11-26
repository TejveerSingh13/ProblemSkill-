function throttle(func, wait, option = {leading: true, trailing: true}) {
    let {leading, trailing} = option
    let lastarg = null
    let timer = null
  
    let setTimer = () => {
      if(lastarg && trailing){
        func.apply(this, lastarg)
        lastarg = null
        timer = setTimeout(setTimer, wait);
      }else{
        timer = null
      }
    }
  
    return function(...args){
      if(!timer){
        if(leading){
          func.apply(this, args)
        }
        timer = setTimeout(setTimer, wait)
      }else{
        lastarg = args
      }
    }
  }