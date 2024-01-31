# Notes for TypeScript Concepts

TypeScript is a superset of JavaScript. Its not like it adds more features to existing JS but it a development tool that helps you to write better code. Its all about **Type-Safety**. Only job of TypeScript -> Static Checking.   
Types : number, string, boolean, null, undefined, **void**, objects, array, tuplees, any, **never**, unknown, etc. All lowercase.   
Type Inference -> typescript is smart, if you assign a variable a value immediately Eg. `let id = 123`, we dont have to write it as `let id : number = 123`.   

```typescript
// Sample function 
function addTwo (num : number) : number{
  return num + 2
}
// Sample fucntions for obj
function createUser({name: string, isPaid: number}){} // fucntion taking obj parameter
function createCourse():{}{} //fucntion returning object denoted by `:{}`
//OR
function createCourse():{name: string, isPaid: number}{ //fucntion with a defined return obj
  return {name: "Tejveer", isPaid: 399}
}
```
We can add the type like above to callback functions too.   

```typescript
// Example of type Alisases
type User = {
  name: string,
  email: string,
  isActive: boolean
}
function createUser(user : User) : User {
  return {name: 'tej', email: 'tej@tej.com', isActive: true}
}
createUser({name: 'tej, email: '', isActive: false})
```
**Here are some of the benefits of using type aliases in TypeScript:**   
* Improved readability
* Reduced repetition
* Improved maintainability
* Error prevention:
Type aliases can help you to prevent errors by making it clear what types of data are expected.
