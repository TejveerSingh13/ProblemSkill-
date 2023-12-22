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

## 4. Throttle
### Concept + difference from throttle    
Debounce waits for the mentioned cooldown period to expire before executing the function. If the function is invoked before the cooldown period is over, the debounce function restarts the cooldown period in a simple debounce.   
On the other hand, in the case of throttle, the throttle will delay the function execution until the wait period. It ignores all calls made to the function during the wait period instead of restarting the waiting period, as in the case of debounce.

## 5. Composition and pipe()
**Composition:**
Composition is a fundamental concept in software design, where complex systems are built by combining smaller, more manageable parts. In JavaScript, composition often involves creating objects or functions by combining multiple smaller objects or functions.  
For example, if you have two functions `f(x)` and `g(x)`, you can compose them to create a new function `h(x) = f(g(x))`.

**Function Composition:**
Function composition is a specific form of composition applied to functions. It involves combining two or more functions to produce a new function. The result of one function becomes the input of another.  
In mathematical terms, if you have functions `f: A -> B` and `g: B -> C`, their composition `g ∘ f` is a new function `h: A -> C` defined by `(g ∘ f)(x) = g(f(x))`.  

`pipe()` Function:
In JavaScript, the pipe() function is a utility function that facilitates function composition. It takes multiple functions as arguments and returns a new function that applies each function in sequence, from left to right.  
Here's a simple implementation of pipe():   
```javascript
const pipe = (...functions) => (input) =>
  functions.reduce((acc, func) => func(acc), input);

// Example usage:
const add = (a) => (b) => a + b;
const square = (x) => x * x;
const increment = (x) => x + 1;

const calculate = pipe(increment, square, add(3));

console.log(calculate(2)); // Output: (2 + 1)^2 + 3 = 12
```
### Difference from Abstraction and Inheritance:
**Composition vs. Abstraction:** Composition is about combining simpler components to build more complex ones, while abstraction involves simplifying complex systems by hiding unnecessary details. Composition focuses on building, while abstraction focuses on simplifying.   
**Composition vs. Inheritance:** Composition is an alternative to inheritance. With composition, you create relationships between objects by combining them, whereas inheritance involves creating relationships by creating hierarchies of classes. Composition is often considered more flexible and favors a "has-a" relationship over an "is-a" relationship.  

#### ****IMPORTANT -> Check code immutable-helper for Array and Object manupulation!!!

## 6. Context, `this` and Binding  
The term "context" in JavaScript typically refers to the value of the this keyword within a particular execution scope. The value of this is dynamically determined based on how a function is invoked, and it can vary depending on the context in which the function is called.  
### `this` in Different Contexts:
* **Global Context:**  
In the global scope or when a function is called without any specific context, this refers to the global object (window in browsers, global in Node.js).
```javascript
console.log(this); // Refers to the global object
```
* **Function Context:**  
Inside a regular function, `this` is determined by how the function is called. It can be influenced by methods like `call()`, `apply()`, or `bind()`.
```javascript
function myFunction() {
  console.log(this);
}
myFunction(); // Refers to the global object
const obj = { method: myFunction };
obj.method(); // Refers to the object (obj) calling the method
```
* **Object Method Context:**      
When a function is a method of an object, `this` refers to the object itself.
```javascript
const obj = {
  myMethod: function() {
    console.log(this);
  }
};
obj.myMethod(); // Refers to the object (obj) calling the method
```
* **Event Handler Context:**      
In the context of event handlers, like those in the DOM, this typically refers to the DOM element that triggered the event.
```html
<button onclick="console.log(this);">Click me</button>
```
* **Arrow Function Context: <- Very IMPORTANT check [here](https://www.programiz.com/javascript/arrow-function) to learn more**     
Unlike regular functions, arrow functions do not have their own `this` context. They inherit `this` from the enclosing lexical scope.
```javascript
const myArrowFunction = () => {
  console.log(this);
};
myArrowFunction(); // Inherits from the surrounding lexical scope
```
### Explicit Binding Methods:      
* **1. `call()` Method:** The call() method is used to invoke a function immediately with a specified this value and arguments provided individually.
* **2. `apply()` Method:** The apply() method is similar to call(), but it takes arguments as an array.
```javascript
function greet() {
  console.log(`Hello, ${this.name}`);
}
const person = { name: "John" };
greet.call(person); // Outputs: Hello, John
greet.apply(person, ["Hello"]); // Outputs: Hello, John
```
* **3. `bind()` Method:** The bind() method returns a new function with a bound this value, but unlike call() and apply(), it doesn't immediately invoke the function.
```javascript
function greet() {
  console.log(`Hello, ${this.name}`);
}
const person = { name: "John" };
const greetJohn = greet.bind(person);
greetJohn(); // Outputs: Hello, John
```
## 7. DOM tree structures and Key words
The Document Object Model (DOM) represents the structure of an HTML or XML document as a tree-like structure. The DOM tree consists of nodes, and each node represents an element, attribute, or piece of text in the document. The structure can be summarized as follows:   

**1. Document Node (root node):** Represents the entire document.   
**2. Element Nodes:** Represent HTML or XML elements.   
**3. Attribute Nodes:** Represent attributes of elements.   
**4. Text Nodes:** Contain the text content of elements.   

To access children nodes in the DOM tree, you can use various properties and methods provided by the DOM API. Some commonly used ones include:   

**1. parentNode:** Gets the parent node of a specified node.   
**2. childNodes:** Gets a NodeList of child nodes for a specified node.   
**3. firstChild:** Gets the first child node of a specified node.   
**4. lastChild:** Gets the last child node of a specified node.   
**5. nextSibling:** Gets the node immediately following a specified node.   
**6. previousSibling:** Gets the node immediately preceding a specified node.   
**7. children:** Gets a live HTMLCollection of child elements for a specified node.   

## 8. Advanced Concepts in JavaScript Object Manipulation   

When working with objects in JavaScript, understanding certain advanced concepts is crucial for effective and sophisticated manipulation of object properties. These concepts include handling enumerable and non-enumerable properties, using symbols as property keys, and leveraging methods like Object.defineProperties and Object.getOwnPropertyDescriptors. Here's a summary of these key concepts:   

**1. Enumerable vs. Non-Enumerable Properties**   
* **Enumerable Properties:** These properties show up in for...in loops and are returned by methods like Object.keys(). They are the "visible" properties of an object.
* **Non-Enumerable Properties:** These do not appear in for...in loops and are not returned by Object.keys(). They are often used to add properties to an object that should not be iterated over in loops.
  
**2. Symbols as Property Keys**
* **Symbol:** A unique and immutable data type introduced in ES6, used as a way to create unique keys for object properties, thus avoiding property name collisions.
* **Hidden Nature:** Properties keyed by symbols are not enumerated in standard loops (like for...in) and are not returned by methods like Object.keys(). This makes them suitable for "hidden" or "private" properties.
* **Copying Symbols:** When copying properties from one object to another, it's important to consider symbol-keyed properties explicitly, as they are not handled by some standard object-copying methods.

**3. Object.defineProperties and Object.getOwnPropertyDescriptors**
* **Object.defineProperties:** This method is used to define new or modify existing properties directly on an object, providing control over property descriptors.
  **Usage:** Allows the definition of multiple properties at once, specifying their descriptors, like value, writability, enumerability, configurability, and getter/setter functions.
* **Object.getOwnPropertyDescriptors:** Introduced in ES2017, this method returns all own property descriptors of a given object.
  **Usage:** Useful for getting a complete descriptor map, including accessors and flags, for all properties of an object (both enumerable and non-enumerable).

**4. Copying Properties with Object.assign vs. completeAssign**
* **Object.assign:** A method used to copy all enumerable own properties from one or more source objects to a target object.
  **Limitation:** It does not copy non-enumerable properties and does not preserve the original property descriptors (like getters and setters).    
* **completeAssign Function:** A custom function that goes beyond Object.assign by:
  **Copying All Properties:** Including both enumerable and non-enumerable properties.
  **Preserving Descriptors:** Using Object.getOwnPropertyDescriptors to maintain property characteristics like getters/setters and configurability.
  **Handling Symbol Properties:** Explicitly copying properties keyed by symbols.
