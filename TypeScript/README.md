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
## Public and Private
Continuing the above example:-
```typescript
class User {
  public email: string; // everthing we dont mark is public by default
  name: string;
  private city: string = ""; // makingit private we wont be able to access it outside the class. See below
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
const tej = new User("tej@tej.com", "Tej");
// tej.city // NOT POSSIBLE TO ACCESS LIKE THIS SINCE PRIVATE
// Shortcut way to write the above class
class User {
  private readonly city: string = "";
  constructor(public email: string, public name: string) {}
}
```
## Getters and Setters
What I understand is getters and setters would provide a method to access and modify the values of these `private` variables
```typescript
class User {
  private _courseCount = 1;

  private readonly city: string = "";
  constructor(public email: string, public name: string) {}

  // private property accessible insde class
  private deleteToken() {
    console.log("Deleting somthing");
  }

  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }
  // A setter cannot have any return type its left blank, we cant even write it void
  // Setters in TypeScript/JavaScript do not have a return type because they are meant to modify the value of a property, not to return a value.
  set courseCount(courseNum) {
    if (this._courseCount <= 1)
      throw new Error("Course count should be more then one");
    else this._courseCount = courseNum;
  }
}
```
## Inheritance and Protected
```typescript
class User {
  protected _courseCount = 1;
  //....
}
class SubUser extends User {
  // everthing is accessible, except, private variables
  isFamily: boolean = true;
  changeCourseCount() {
    //changing _courseCount to protected from private will make it accessible to all the extended class while still
    // remaining unaccessible to outside class
    this._courseCount = 4;
  }
}
```
## Interface
Interfaces are **implemented** by the class
```typescript
interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  //Instgram needs to have the properties of Interface
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  //adding more is allowed not adding required paramters is not
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("story was created");
  }
}
```
## Abstract Class
super() in abstract class and not in interface:

* In an abstract class, the super() call is used to invoke the constructor of the base class (the abstract class) from the constructor of the derived class. This is because abstract classes can have concrete implementation details, including a constructor.
* Interfaces, on the other hand, cannot have constructor implementations or instance variables, so there's no need for a super() call in interfaces.

```typescript
abstract class TakePhoto{
    constructor(
        public camerMode: string,
        public filter: string
    ){}
        // this says that bro this is abstract i am not going to provide any defination
        // i dont know how other are going to implemnet it but they need to implement it 
        // basically compulsory class are declared as abstract
    abstract getSepia():void
    getReelTime():number{
        //some complex calculation
        return 8
    }
}

//when declared as abstract we cannot create objects from it.
// const tejveer = new TakePhoto("original", "Sand")

//only can create object by extending it / inheriting it 
class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        // need to do this way ?
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("Sepia");
    }
}
```
# Generics <x>
What i understood is, it is use to generalise type. For eg suppose we hae a function in which the return type is same as the parameter type.   
We can also pass our customize type in the generic but the syntax is a little different check documentations.   
```typescript
// this is how we usually thing we do but here we need to put condition to match the return type to the input parameter type
// which may make the code long incase of multiple input type
function identityOne(val: boolean | number): boolean | number {
  return val;
}
// this is the eaasiest hack anyone would think of but this might mess up the implementation
function identityTwo(val: any): any {
  return val;
}
// This is the peoper way to use generic it makes sure the types are matched
function identityThree<Type>(val: Type): Type {
  return val;
}
// This is the short hand version of the above code
function identityFour<T>(val: T): T {
  return val;
}
// This is how you use this fucntion 
let func = identityFour(3) //<- this will set the type of return as the type of input parameter type
```
## Generics with array and Arrow fucntions
```typescript
function getSearchProduct<T>(products: T[]): T {
  // need to understand that the type is still T
  // the line (products: T[]) or (products: Array<T>) says the input is an Array of type T
  // now return type T means it should be one of the value from that array of type T
  return products[3];
}

// Converting the above to arrow fucntion

// the "," is for compiler to let it know its not jsx its a generic
const getMoreSearchProducts = <T,>(products: T[]): T => {
  return products[3];
};
```
## Generic class <- look documentation
