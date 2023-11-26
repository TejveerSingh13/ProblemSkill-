# Notes for JavaScript Concepts

## 1. Closures
### Concept
A closure in JavaScript is a combination of a function and the lexical environment within which that function was declared. In simpler terms, a closure allows a   function to access variables from its outer (enclosing) scope even after the outer function has finished executing. Lets see an example below.  
### Example
```javascript
function outerFunction() {
  let outerVariable = 'I am from outer function';
  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer scope
  }
  return innerFunction; // Return the inner function, creating a closure
}
let closureFunction = outerFunction();
closureFunction(); // Output: "I am from outer function"
```
The innerFunction forms a closure because it **"closes over"** the outerVariable. Even after outerFunction has finished executing, the closureFunction still has access to outerVariable because it **"remembers"** its lexical scope.
### Usecase
- **Data Encapsulation:** Creating a variable in outer function and then the manipulation is done in the inner returened function. So whenever we call the inner function the variable in the outer function keeps updating.
- **Factory Functions:**  A factory function in JavaScript is a function that returns an object. The purpose of a factory function is to produce objects with specific characteristics or behaviors without the need for a constructor function or the **new** keyword. and
- **Event Handler:** Closures are often used in event handlers to maintain access to variables from the enclosing function.

## 2. Curring  
### Concept
Currying is a concept in functional programming where a function is transformed into a sequence of functions, each taking a single argument. The curried function, when invoked with fewer than its expected arguments, returns a new function that takes the remaining arguments. In JavaScript, you can implement curry using closures.
### Example
```javascript
// Non-curried function
function add(x, y, z) {
  return x + y + z;
}
// Curry the function
function curryAdd(x) {
  return function(y) {
    return function(z) {
      return x + y + z;
    };
  };
}
```
In this example, curryAdd is a curried version of the add function. When you invoke curryAdd(2), it returns a function that takes one argument (y), and when you invoke curryAdd(2)(3), it returns a function that takes the final argument (z). The sequence of function calls allows you to partially apply arguments and create more specialized functions.  

## 3. Throttle
### Concept
Throttling is a programming concept used to control the rate at which a function is executed. It ensures that the function is not called more often than a specified time interval, also known as the throttle interval. Throttling is commonly used in scenarios where continuous or rapid execution of a function is not desirable, such as handling user input, resizing events, or scrolling events.  
### Example
```javascript
function throttle(func, delay) {
  let lastTime = 0;

  return function (...args) {
    const currentTime = new Date().getTime();

    if (currentTime - lastTime >= delay) {
      func.apply(this, args);
      lastTime = currentTime;
    }
  };
}

// Example usage:
const throttledFunction = throttle(() => {
  console.log('Function executed!');
}, 1000); // Throttle interval set to 1000 milliseconds (1 second)

// Execute the throttled function multiple times
setInterval(() => {
  throttledFunction();
}, 200); // The function will be called at most once every 1000 milliseconds (1 second)
```
## 3.1 Enhance Throttleing
### Concept
Two flags are used **leading** and **trailing**
1. leading = _True_ and trailing _True_ : Default behaviour as the above throttling
2. leading = _False_ and trailing _False_ : Nothing will happen wont be able to run the throttle function
3. leading = _True_ and trailing _False_ : The function executes immediately upon the first call, but subsequent calls within the delay are ignored. It doesn't keep track of the latest call; it only allows the first call to proceed immediately.  
4. leading = _False_ and trailing _True_ : The first call is ignored (doesn't execute immediately) because leading is set to false. However, it schedules a trailing invocation after the specified delay. Subsequent calls during the waiting period update the arguments to be used for the trailing invocation. After the delay, the function executes with the arguments from the latest call within the delay.
