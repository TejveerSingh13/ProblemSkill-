function curry(fn){
    return function currying(...args){
        return args.length >= fn.length && !args.includes(curry.placeholder)
            ? fn(...args.slice(0,fn.length))
            : (...args2) => currying(
                ...args.map(a => a === curry.placeholder ? args2.shift() : a),
                ...args2
            )
    }
}
curry.placeholder = Symbol()