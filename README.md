# ProblemSkill-
A repository for JS practice

Contains my solutions to some leetcode problems, vanilla JS, and DSA in JS
## Important Algorithms learned from leetcode
### 1. Floyd's cycle-finding algorithm
Floyd's cycle-finding algorithm, also known as the "tortoise and hare" algorithm, is a popular algorithm used to detect cycles in a linked list. The algorithm involves two pointers, often referred to as the "tortoise" and the "hare," which traverse the linked list at different speeds. The tortoise moves one step at a time, while the hare moves two steps at a time. By comparing the positions of the tortoise and the hare at each step, the algorithm can determine if there is a cycle in the linked list. The key idea behind the algorithm is that if there is a cycle in the linked list, the hare will eventually catch up to the tortoise at some point during its traversal. The algorithm has a time complexity of O(n), where n is the number of nodes in the linked list.

## Data Structures in this Repository
Check in ./DataStructures and Algorithms/DS's
### 1. Singly Linked List
#### Node class:

Represents a node in the singly linked list.

##### Properties:
* val: The value stored in the node.
* next: Reference to the next node (initially set to null).
#### SinglyLinkedList class:

Represents a singly linked list.

##### Properties:
* length: The number of nodes in the linked list.
* head: Points to the first node in the linked list (initially set to null).
* tail: Points to the last node in the linked list (initially set to null).
##### Methods:

###### push(val): Adds a new node with the given value at the end of the linked list.
###### traverse(): Prints the values of all nodes in the linked list.
###### pop(): Removes and returns the last node from the linked list.
###### shift(): Removes and returns the first node from the linked list.
###### unshift(val): Adds a new node with the given value at the beginning of the linked list.
###### get(index): Retrieves and returns the node at the specified index.
###### set(index, val): Updates the value of the node at the specified index.
###### insert(index, val): Inserts a new node with the given value at the specified index.
###### remove(index): Removes and returns the node at the specified index.
###### reverse(): Reverses the order of nodes in the linked list.
###### print(): Prints the current state of the linked list as an array.
These classes and methods provide essential functionality to work with a singly linked list data structure. They allow you to manipulate and traverse the linked list, insert and remove nodes at specific positions, and reverse the order of nodes. The print() method is a helpful utility for debugging and visualizing the state of the linked list.
##### Big O complexity
* Insertion = O(1)
* Removal = O(1) or O(n)
* Searching, Access = O(n)
###### SLL better at insertion and deletion as compared to arrays

### 2. Doubly Linked List
#### Node class:

Represents a node in the doublyly linked list. Constructor: Initializes the node with a value and sets the next and previous references to null.

##### Properties:
* val: The value stored in the node.
* next: Reference to the next node (initially set to null).
* prev: Reference to the previous node (initially set to null).
#### DoublyLinkedList class:

Represents a doubly linked list.

##### Properties:
* length: The number of nodes in the linked list.
* head: Points to the first node in the linked list (initially set to null).
* tail: Points to the last node in the linked list (initially set to null).
##### Methods:

###### push(val): Adds a new node with the given value at the end of the linked list.
###### pop(): Removes and returns the last node from the linked list.
###### shift(): Removes and returns the first node from the linked list.
###### unshift(val): Adds a new node with the given value at the beginning of the linked list.
###### get(index): Retrieves and returns the node at the specified index.
###### set(index, val): Updates the value of the node at the specified index.
###### insert(index, val): Inserts a new node with the given value at the specified index.
###### remove(index): Removes and returns the node at the specified index.
###### reverse(): Reverses the order of nodes in the linked list..
These methods allow for various operations on the doubly linked list, such as adding, removing, updating, and retrieving nodes.
##### Big O complexity
* Insertion = O(1)
* Removal = O(1)
* Searching, Access = O(n)
###### DLL takes more memory but is more flexible. Removal is always O(1). Better than finding node then SLL

### 3. Stack and Queue

Stack uses LIFO and Queue uses FIFO.

#### 3A. Stack class:

The Stack class relies on the SinglyLinkedList class to store and manipulate the stack elements. The SinglyLinkedList class provides the necessary methods for managing the linked list, which are used by the Stack class to implement stack-specific operations.
* Constructor: Initializes an empty stack by creating a new SinglyLinkedList instance.

##### Methods:

###### push(val): Adds a new value to the top of the stack.
###### pop(): Removes and returns the value from the top of the stack.

#### 3B. Queue class:

The Queue class utilizes the SinglyLinkedList class to store and manipulate the queue elements. The SinglyLinkedList class provides the necessary methods for managing the linked list, which are used by the Queue class to implement queue-specific operations. 
* Constructor:  Initializes an empty queue by creating a new SinglyLinkedList instance.

##### Methods:

###### enqueue(val): Adds a new value to the back of the queue.
###### dequeue(): Removes and returns the value from the front of the queue.

#### Big O complexity
* Insertion = O(1)
* Removal = O(1)
* Searching, Access = O(n)
###### Using Arrays for both of them is inefficient since it will re-index all element on push/pop/unshift/shift operation/s.

## Class JS ES2015 basics notes:
![](https://github.com/TejveerSingh13/ProblemSkill-/assets/44855917/b42c439c-7d94-45d3-81e8-b1f82cea590d)
![](https://github.com/TejveerSingh13/ProblemSkill-/assets/44855917/49ebe313-8e6d-4515-91ab-df99da4beb45)
