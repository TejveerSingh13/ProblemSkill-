/**
 * Now, the below function is the currying function it will take in an function and return a function,
 * that function will in turn decide if the number of argument are matched 
 * if matched it will call the main function passed to currying fucntion or
 * If not matched will return an another function with the given argument and will wait to get more argument 
 * 
 * Here, we are using the concept of closures. fn is passed to outer function which is used or invoked by inner function
 */
const currying = (fn) => {
    return function innerCurrying(...args) {
        if(args.length >= fn.length) return fn(...args)
        return (...args2) => innerCurrying(...args, ...args2)
    }
}