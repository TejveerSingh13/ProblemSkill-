# ProblemSkill-
A repository for JS practice

Contains my solutions to some leetcode problems, vanilla JS, and DSA in JS
## Important Algorithms learned from leetcode
### 1. Floyd's cycle-finding algorithm
Floyd's cycle-finding algorithm, also known as the "tortoise and hare" algorithm, is a popular algorithm used to detect cycles in a linked list. The algorithm involves two pointers, often referred to as the "tortoise" and the "hare," which traverse the linked list at different speeds. The tortoise moves one step at a time, while the hare moves two steps at a time. By comparing the positions of the tortoise and the hare at each step, the algorithm can determine if there is a cycle in the linked list. The key idea behind the algorithm is that if there is a cycle in the linked list, the hare will eventually catch up to the tortoise at some point during its traversal. The algorithm has a time complexity of O(n), where n is the number of nodes in the linked list.

### 2. Boyer-Moore Voting Algorithm
The Boyer-Moore Voting Algorithm is an efficient algorithm used to find the majority element in an array. The majority element is defined as an element that appears more than n/2 times in an array of length n. The algorithm operates by maintaining a count and a candidate element. It iterates through the array, updating the count and candidate based on certain conditions. If the count becomes zero, the algorithm selects a new candidate. At the end of the iteration, the selected candidate is checked to determine if it meets the majority element criteria. The algorithm guarantees that if there is a majority element present, it will correctly identify it. The Boyer-Moore Voting Algorithm has a time complexity of O(n) and a space complexity of O(1), making it highly efficient. However, it does not provide information about the maximum count or multiple majority elements in the array.

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

### 4. Trees

Tree are non-linear. SLL is a special case of tree. 

Treminology : Root- top node; Child- node connected to another node when moving away from root; Parent- Converse node of a child; Sibling: group of nodes with same parents; Leaf: node with no children; Edge: Connection between one node and another, Degree: the total number of children of a node is called the degree of the node.

Use Cases: DOM, Network Routing, OS-folder: directory.

#### Tree Traversal

Traverse functions only for Binary Trees.

##### 1. Breadth First Search (BFS) :

Working horizontally. The BFS() function performs a breadth-first search traversal on a binary search tree (BST), visiting each node level by level. It uses a queue to process nodes, starting from the root and iteratively adding the left and right child nodes to the queue. The algorithm returns an array of node values in BFS order.

ToDo : Use queue developed in previous section instead of array.

##### 2. Depth First Search (DFS)

Working vertically. Have three different approch.

###### 2.1. InOrder

First vist left child then node and then right child.

The InOrder function performs an in-order traversal of a binary search tree (BST). It starts from the root node and recursively traverses the left subtree, then appends the value of the current node, and finally traverses the right subtree. The function returns an array containing the node values in in-order traversal order.

###### 2.2. PreOrder

First visit the node then its complete left side and then the right side.

The PreOrder() function traverses a binary search tree (BST) in pre-order fashion, starting from the root node. It recursively visits each node, appending its value to an array, and then traverses the left and right subtrees. The function returns an array of the node values in pre-order traversal order.

Basically used when you want to store tree in an array somewhere

###### 2.3. PostOrder

Visit the node after we explore its left and right.

The PostOrder function performs a post-order traversal of a binary search tree (BST). It starts from the root node and recursively traverses the left and right subtrees. The function appends the value of each node to an array after traversing its children. Finally, it returns an array containing the node values in post-order traversal order.

##### ToDo : Balanced and Balancing trees, Delete node in BST

## Class JS ES2015 basics notes:
![](https://github.com/TejveerSingh13/ProblemSkill-/assets/44855917/b42c439c-7d94-45d3-81e8-b1f82cea590d)
![](https://github.com/TejveerSingh13/ProblemSkill-/assets/44855917/49ebe313-8e6d-4515-91ab-df99da4beb45)
