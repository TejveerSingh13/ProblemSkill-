function sum(a, b, callback){
    /** 
    * the callback has an in general structure of 
    * (error, val), where error and value are the return value from the main outer function. 
    * What i understood is depending on the internal logic of the main funtion 
    * its either result into error or an actual output value
    * so whatever the callback is, we dont know what the callback will do with 
    * the main function output but we know its syntax and we follow it
    */
    //Simulation of an async task
    setTimeout(()=>{
        //Here goes the main function logic
        if(typeof a != 'number' || typeof b != 'number'){
            //Just follow syntax
            callback(new Error('Invalid Input!'), null)
        } else callback(null, a+b)
    }, 1000)
}
//Lets define out callback outside for simplicity
let printOutput = (error, value) => {
    if(error) console.log('with callback the error is : ', error)
    else console.log('with callback the output is : ', value)
}
//Actual calling of main function 
sum(4,5, printOutput)

/**Now lets create a generic promisify fucntion
* that will take in the async function as above and convert its output to 
* a promise
*/

const promisify = function (func){
    /**
     * promisify will take in an async funtion and will return a fucntion
     * that will take in arguments originally passed to the main fucntion 
     * we will be passing a customized callback, but in the same (error, value)
     * syntax as decided before
    */
    return function(...args) {
        return new Promise((res, rej) => {
                //In the promise we call the main fucntion
                // This is same as above without promisify i.e sum(4,5, printOutput)
                func(...args, (error, data) => {
                    if(error) rej(error)
                    else res(data)
                })
            })
    }
}

let promiseSum = promisify(sum)
promiseSum(7,8)
.then((val) => console.log('from the promise then : ', val))
.catch((err) => console.log('fromt the promise catch : ', err))







