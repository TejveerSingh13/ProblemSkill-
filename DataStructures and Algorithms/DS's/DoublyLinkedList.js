// Commented DLL code:

class Node {
    constructor(val) {
        this.val = val; // The value stored in the node
        this.next = null; // Reference to the next node (initially set to null)
        this.prev = null; // Reference to the previous node (initially set to null)
    }
}

class DoublyLinkedList {
    constructor() {
        this.length = 0; // The number of nodes in the linked list
        this.head = null; // Points to the first node in the linked list (initially set to null)
        this.tail = null; // Points to the last node in the linked list (initially set to null)
    }

    // Add a new node to the end of the linked list
    push(val) {
        let newNode = new Node(val); // Create a new node with the given value
        if (!this.head) {
            // If the linked list is empty (no head node), make the new node the head and tail
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode; // Set the next reference of the current tail to the new node
            newNode.prev = this.tail; // Set the previous reference of the new node to the current tail
            this.tail = newNode; // Update the tail to be the new node
        }
        this.length += 1; // Increment the length of the linked list
        return this; // Return the updated linked list
    }

    // Remove and return the last node from the linked list
    pop() {
        if (!this.head) return undefined; // If the linked list is empty, return undefined

        let oldNode = this.tail; // Save a reference to the current tail node
        if (this.length === 1) {
            // If the linked list has only one node
            this.head = this.tail = null; // Set both the head and tail to null
        } else {
            this.tail = oldNode.prev; // Update the tail to be the previous node
            this.tail.next = null; // Set the next reference of the new tail to null
        }
        oldNode.prev = null; // Set the previous reference of the old tail to null
        this.length--; // Decrement the length of the linked list
        return oldNode; // Return the removed node
    }

    // Remove and return the first node from the linked list
    shift() {
        if (!this.head) return undefined; // If the linked list is empty, return undefined

        let oldHead = this.head; // Save a reference to the current head node
        if (this.length === 1) {
            // If the linked list has only one node
            this.head = this.tail = null; // Set both the head and tail to null
        } else {
            this.head = oldHead.next; // Update the head to be the next node
            this.head.prev = null; // Set the previous reference of the new head to null
        }
        oldHead.next = null; // Set the next reference of the old head to null
        this.length--; // Decrement the length of the linked list
        return oldHead; // Return the removed node
    }

    // Add a new node to the beginning of the linked list
    unshift(val) {
        let newNode = new Node(val); // Create a new node with the given value
        if (!this.head) {
            // If the linked list is empty (no head node), make the new node the head and tail
            this.head = this.tail = newNode;
        } else {
            this.head.prev = newNode; // Set the previous reference of the current head to the new node
            newNode.next = this.head; // Set the next reference of the new node to the current head
            this.head = newNode; // Update the head to be the new node
        }
        this.length++; // Increment the length of the linked list
        return this; // Return the updated linked list
    }

    // Get the node at the specified index
    get(index) {
        if (index < 0 || index >= this.length) return null; // If the index is out of bounds, return null

        if (index <= this.length / 2) {
            // If the index is in the first half of the linked list
            let count = 0;
            let current = this.head;
            while (count !== index) {
                current = current.next; // Move to the next node
                count++; // Increment the count to track the progress
            }
            return current; // Return the node at the specified index
        } else {
            // If the index is in the second half of the linked list
            let count = this.length - 1;
            let current = this.tail;
            while (count !== index) {
                current = current.prev; // Move to the previous node
                count--; // Decrement the count to track the progress
            }
            return current; // Return the node at the specified index
        }
    }

    // Update the value of the node at the specified index
    set(index, val) {
        let current = this.get(index); // Retrieve the node at the specified index using the get() method

        if (current) {
            current.val = val; // Update the value of the retrieved node with the new value
            return true; // Return true to indicate that the value at the specified index was successfully updated
        }

        return false; // Return false if the index is invalid or the node doesn't exist
    }

    // Insert a new node at the specified index
    insert(index, val) {
        if (index < 0 || index > this.length) return false; // If the index is out of bounds, return false
        if (index === 0) return !!this.unshift(val); // If the index is 0, use the unshift() method to insert the value at the beginning of the list
        if (index === this.length) return !!this.push(val); // If the index is the same as the length of the list, use the push() method to insert the value at the end of the list

        let newNode = new Node(val); // Create a new node with the given value
        let previous = this.get(index - 1); // Get the node at the previous index
        let newNext = previous.next; // Save the reference to the next node of the previous node
        previous.next = newNode; // Set the next reference of the previous node to the new node
        newNext.prev = newNode; // Set the previous reference of the next node to the new node
        newNode.prev = previous; // Set the previous reference of the new node to the previous node
        newNode.next = newNext; // Set the next reference of the new node to the next node
        this.length++; // Increment the length of the linked list
        return true; // Return true to indicate that the node was successfully inserted
    }

    // Remove the node at the specified index
    remove(index) {
        if (index < 0 || index >= this.length) return undefined; // If the index is out of bounds, return undefined
        if (index === 0) return this.shift(); // If the index is 0, use the shift() method to remove and return the first node
        if (index === this.length - 1) return this.pop(); // If the index is the same as the length of the list minus 1, use the pop() method to remove and return the last node

        let current = this.get(index); // Get the node at the specified index
        let previous = current.prev; // Get the previous node
        let next = current.next; // Get the next node
        previous.next = next; // Set the next reference of the previous node to the next node
        next.prev = previous; // Set the previous reference of the next node to the previous node
        current.prev = current.next = null; // Set the previous and next references of the removed node to null
        this.length--; // Decrement the length of the linked list
        return current; // Return the removed node
    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node

        let prev = null
        let next
        for (let i = 0; i < this.length; i++) {
            next = node.next
            node.next = prev
            node.prev = next
            prev = node
            node = next
        }    
    }

    // Helper function to look at current state of the Linked list
    print(){
        let arr = []
        let current  = this.head
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        console.log(arr);
    } 
}