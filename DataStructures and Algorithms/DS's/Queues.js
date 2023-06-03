const SLL = require('./SinglyLinkedList'); // Importing the SinglyLinkedList module

class Queue {
    constructor() {
        this.queue = new SLL(); // Initializing a new SinglyLinkedList instance as the queue
    }

    enqueue(val){
        this.queue.push(val); // Adding a new value to the queue using push() method of SinglyLinkedList
        return this.queue.length; // Returning the updated length of the queue
    }

    dequeue(){
        let node = this.queue.shift(); // Removing and returning the first node from the queue using shift() method of SinglyLinkedList
        return node; // Returning the popped node
    }
}

modules.exports = Queue; // Exporting the Queue class
