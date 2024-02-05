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
  readonly _id: string //readonly is a keyword
  name: string,
  email: string,
  isActive: boolean
  creditCard?: number //optional argument
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

### Combining types
```typescript
type cardNumber = {
  cardNumber:string
}
type cardDate = {
  cardDate:string
}
type cardDetails = cardNumber & cardDate & {
  cvv: number
}
```

for arrays syntax is -> `const arr: string/number[] = []` || `Array<number/string> = []`
for 2-D array -> `const 2dArr: number[][] = []`   

## Union
Used when we dont know what kind of data is coming. Recommend to use this in place of `any`. Basically putting `|` between differnt type a variable/object can be.
```typescript
// Important Example
// Suppose we have a fucntion which takes ID as a parameter. and the ID can be a number or a String.
fucntion getDBId(id: number | string ){
  //typescript wont allow us to do something like..
  id.toLowerCase()
  // why? since wrt to TS id is a new data type it can be a number OR string
  // So, before we do such operations on data we need to make sure what is the incoming type of the two. for example..
  if(typeod id === 'string') id.toLowerCase()

  //union are also used in case of array if an array has multiple data types in it. Eg...
  const data: (string | number | boolean)[] = [1,2,"3", false]

  //Strict Assignment ex....
  let pi:3.14 = 3.14
  // Practical use case. example a flight system
  let seatAllotment = "aisle" | "middle" | "window" // only these values allowed.
}
```
## Tuples
Broadly its a specilized array with some restriction on to it. If we want the data in array in a specific order.
```typescript
  const data: [string, number, boolean] = ["3", 1, false]
  // Can also define a type like this ex..
  type User = [number, string]
  const newUser: User = [123, "Tejveer"]
```
## Enums
To restrict user choice. Similar to Strict Assignemtn? 
```typescript
  enum SeatChoice{
      AISLE, MIDDLE, WINDOW
  }
  let hcSeat = SeatChoice.AISLE
```
## Interface
Interface is different from type.

```typescript
interface User {
  email: string,
  userId: number,
  googleId?: string, // optional
  readonly dbId: number, // read Only cant update value once set
  //startTrial: () => string, // startTrial is a function that returns a string **OR**
  startTrial(): string,
  getCoupon(couponname: string, value: number): number
}
// it is said that ~" An interface can be open again" OR "reopening of an interface"
// which basically means that we can add properties in the furute to it! Eg,,,,

interface User {
  githubToken?: string
}
// this get added to existing properties.

interface Admin extends User {
  role: "admin" | "ta" | "learner"
}

const tej : User = {
    dbId: 22,
    email: "tej@tej.com",
    userId: 1385,
    startTrial: () => { return "trail Started" },
    getCoupon: (name: "Tej10", off: 10) => { return 10 },//over here the parameter we passed is name != couponname is okay since its just reference
}
```
# Classes in Typescript
```typescript
  class User {
    email:string
    name: string // need to create reference outside the constructor
    city: string = "" // since it is not initilized/used inconstructor therefore, need to initilize it here
    constructor(email: string, name: string){
      this.email = email; // the `this` is reference to the email and name outside the constructor.
      this.name = name;
  }
}
const tej = new User("tej@tej.com, "Tej")// no need to provide property name i.e. email and name
tej.city // way to access
```
