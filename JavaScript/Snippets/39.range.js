/**
 * Probably one of the important topic
 */

// Approch one
function range(from, to){
    let result = []
    while(from <= to){
        result.push(from++)
    }
    return result
}

// Approch two Using iterator and iterable protocol
function range(from, to) {
    //Returns an Iterable object -> object that can be iterated
    return{
        //The above is done using this `[Symbol.iterator]()` which tells us the return object is iterable
      [Symbol.iterator](){
            // this return object should have a next function that in case return an object with done and value property
            //this is called as the iterable protocol
        return{
          next(){
            return {
              done: from > to,
              value: from++
            }
          }
        }
      }
    }
  }

  //Approch Three using iterator and generator function
  //Since returns from genrator function implements iterable protocol
  function range(from, to){
    return {
        [Symbol.iterator]: function* (){
            while(from<=to){
                yield from ++
            }
        }
    }
  }

  //Approch Four using IIFE and generator function 
  //Instead of the special [Symbol.iterator] method we call the same generator with an IIFE

  function range(from, to){
    return (function * (){
        while(from<=to){
            yield from++
        }
    })(from, to) // here its passed again so that even if the range is called multiple time with different range
    // out generator has its own closure created byt the IIFE
  }

  //Approh Five changing the initial fucntion to generator
  function* range(from , to){
    while(from <= to){
        yield from++
    }
  }