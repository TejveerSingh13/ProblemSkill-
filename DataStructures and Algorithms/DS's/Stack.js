const SLL = require('./SinglyLinkedList'); // Importing the SinglyLinkedList module

class Stack {
    constructor() {
        this.stack = new SLL(); // Initializing a new SinglyLinkedList instance as the stack
    }

    push(val){
        this.stack.unshift(val); // Adding a new value to the stack using unshift() method of SinglyLinkedList
        return this.stack.length; // Returning the updated length of the stack
    }

    pop(){
        let node = this.stack.shift(); // Removing and returning the first node from the stack using shift() method of SinglyLinkedList
        return node; // Returning the popped node
    }
}

modules.exports = Stack; // Exporting the Stack class
