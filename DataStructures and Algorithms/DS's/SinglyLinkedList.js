// Node -> represents a node in the singly linked list
// It contains a value (val) and a reference to the next node (next)

class Node {
    constructor(val){
        this.val = val; // The value stored in the node
        this.next = null; // Reference to the next node (initially set to null)
    }
}

class SinglyLinkedList {
    constructor(){
        this.length = 0; // The number of nodes in the linked list
        this.head = null; // Points to the first node in the linked list (initially set to null)
        this.tail = null; // Points to the last node in the linked list (initially set to null)
    }
    
    push(val){
        let newNode = new Node(val); // Create a new node with the given value
        if(!this.head) {
            // If the linked list is empty (no head node), make the new node the head and tail
            this.head = this.tail = newNode;
        }
        else{
            // If the linked list is not empty, add the new node after the current tail node
            this.tail.next = newNode; // Set the next reference of the current tail to the new node
            this.tail = newNode; // Update the tail to the new node
        }
        this.length += 1; // Increment the length of the linked list by 1
        return this; // Returning 'this' enables method chaining in the future
    }

    traverse() {
        let current = this.head; // Start from the head node
    
        while (current) {
            console.log(current.val); // Output the value of the current node
            current = current.next; // Move to the next node
        }
    }
    

    pop() {
        if (!this.head) return undefined; // If the linked list is empty, return undefined
    
        let current = this.head; // Start from the head node
        let newTail = current; // Initialize newTail to current
    
        while (current.next) {
            newTail = current; // Move newTail to the previous node
            current = current.next; // Move current to the next node
        }
    
        this.tail = newTail; // Update the tail to the newTail
        this.tail.next = null; // Set the next reference of the new tail to null
        this.length -= 1; // Decrement the length of the linked list by 1
    
        if (this.length === 0) {
            // Special case if the length of the list was 1
            this.head = null;
            this.tail = null;
        }
    
        return current; // Return the popped node
    }

    shift() {
        if (!this.head) return undefined; // If the linked list is empty, return undefined
    
        let current = this.head; // Assign the head node to the current variable
    
        this.head = current.next; // Move the head pointer to the next node
        this.length -= 1; // Decrement the length of the linked list by 1
    
        if (this.length === 0) {
            // Special case if the length of the list was 1
            this.tail = null; // Set the tail to null since there are no more nodes
        }
    
        return current; // Return the shifted node
    }    

    unshift(val) {
        let newNode = new Node(val); // Create a new node with the given value
    
        if (!this.head) {
            // If the linked list is empty (no head node), make the new node the head and tail
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head; // Set the next reference of the new node to the current head node
            this.head = newNode; // Update the head to the new node, making it the new head of the linked list
        }
    
        this.length += 1; // Increment the length of the linked list by 1
    
        return this; // Returning 'this' enables method chaining in the future
    }

    get(index) {
        if (index < 0 || index >= this.length) return null; // If the index is out of bounds, return null
    
        let count = 0; // Initialize a count variable to track the current index
        let current = this.head; // Start from the head node
    
        while (count !== index) {
            current = current.next; // Move to the next node
            count++; // Increment the count to track the progress
        }
    
        return current; // Return the node at the specified index
    }

    set(index, val) {
        let current = this.get(index); // Retrieve the node at the specified index using the get() method
    
        if (current) {
            current.val = val; // Update the value of the retrieved node with the new value
    
            return true; // Return true to indicate that the value at the specified index was successfully updated
        }
    
        return false; // Return false if the index is invalid or the node doesn't exist
    }
    
    insert(index, val) {
        if (index < 0 || index > this.length) return false; // If the index is out of bounds, return false
        if (index === 0) return !!this.unshift(val); // If the index is 0, use the unshift() method to insert the value at the beginning of the list
        if (index === this.length) return !!this.push(val); // If the index is the same as the length of the list, use the push() method to insert the value at the end of the list
    
        let newNode = new Node(val); // Create a new node with the given value
        let previous = this.get(index - 1); // Get the node at the previous index
        let newNext = previous.next; // Save the reference to the next node of the previous node
        previous.next = newNode; // Set the next reference of the previous node to the new node
        newNode.next = newNext; // Set the next reference of the new node to the saved next node
        this.length += 1; // Increment the length of the list by 1
        return true; // Return true to indicate that the value was successfully inserted
    }
    
    remove(index) {
        if (index < 0 || index >= this.length) return undefined; // If the index is out of bounds, return undefined
        if (index === 0) return this.shift(); // If the index is 0, use the shift() method to remove and return the first node
        if (index === this.length - 1) return this.pop(); // If the index is the same as the length of the list minus 1, use the pop() method to remove and return the last node
    
        let previous = this.get(index - 1); // Get the node at the previous index
        let current = previous.next; // Get the node at the specified index
        previous.next = current.next; // Update the next reference of the previous node to skip the current node
        this.length -= 1; // Decrement the length of the list by 1
        return current; // Return the removed node
    }

    reverse() {
        let node = this.head; // Start with the current head node
        this.head = this.tail; // Swap the head and tail references
        this.tail = node;
    
        let prev = null;
        let next;
    
        for (let i = 0; i < this.length; i++) {
            next = node.next; // Save the reference to the next node
            node.next = prev; // Reverse the next reference of the current node to point to the previous node
            prev = node; // Move the prev pointer to the current node
            node = next; // Move the node pointer to the next node
        }
        return this; // Return the reversed linked list
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

module.exports = SinglyLinkedList