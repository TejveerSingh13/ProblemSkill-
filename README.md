# ProblemSkill-
A repository for JS practice

### To check core JavaScript Concepts - > [Link](JavaScript)
### To check TypeScript Concepts - > [Link](TypeScript)
### This README contains some important problem solving algorithms and DSA in JS

## Important Algorithms learned from leetcode
### 1. Floyd's cycle-finding algorithm
Floyd's cycle-finding algorithm, also known as the "tortoise and hare" algorithm, is a popular algorithm used to detect cycles in a linked list. The algorithm involves two pointers, often referred to as the "tortoise" and the "hare," which traverse the linked list at different speeds. The tortoise moves one step at a time, while the hare moves two steps at a time. By comparing the positions of the tortoise and the hare at each step, the algorithm can determine if there is a cycle in the linked list. The key idea behind the algorithm is that if there is a cycle in the linked list, the hare will eventually catch up to the tortoise at some point during its traversal. The algorithm has a time complexity of O(n), where n is the number of nodes in the linked list.

### 2. Boyer-Moore Voting Algorithm
The Boyer-Moore Voting Algorithm is an efficient algorithm used to find the majority element in an array. The majority element is defined as an element that appears more than n/2 times in an array of length n. The algorithm operates by maintaining a count and a candidate element. It iterates through the array, updating the count and candidate based on certain conditions. If the count becomes zero, the algorithm selects a new candidate. At the end of the iteration, the selected candidate is checked to determine if it meets the majority element criteria. The algorithm guarantees that if there is a majority element present, it will correctly identify it. The Boyer-Moore Voting Algorithm has a time complexity of O(n) and a space complexity of O(1), making it highly efficient. However, it does not provide information about the maximum count or multiple majority elements in the array.

### 3. Dutch National Flag Algorithm
The Dutch National Flag algorithm, also known as the 3-way partitioning algorithm, is a sorting algorithm that allows us to sort an array with three distinct values in linear time and with constant extra space.
The algorithm is particularly useful when dealing with problems that involve dividing elements into three categories or groups. One common application is sorting arrays with three different colors or categories.
The idea behind the algorithm is to maintain three pointers: left, curr, and right. The left pointer represents the boundary of the sorted first category, the right pointer represents the boundary of the sorted third category, and the curr pointer iterates through the array.

### 4. Topological Sort
Topological Sort is a fundamental algorithm used to order the vertices of a **directed acyclic graph (DAG)** in such a way that for every **directed** edge (u, v), vertex u comes before vertex v in the ordering. This ordering is known as a topological order.  
The algorithm operates by repeatedly selecting nodes with no **incoming edges**, removing them from the graph, and adding them to the topological order. It continues this process until all nodes have been included in the order. Topological sorting is widely used in various applications, including task scheduling, dependency resolution, and optimizing build systems.

### 5. Kadane's algorithm (maximum subarray sum)  
Kadane's algorithm is a popular algorithm used to find the maximum subarray sum within a given array of integers.The algorithm operates in a simple and elegant way, maintaining two variables as it traverses the array:  
Current Sum (currentSum): This variable keeps track of the maximum sum subarray ending at the current position.  
Maximum Sum (maxSum): This variable keeps track of the maximum sum subarray found so far as the algorithm progresses.  
The maxSum variable is updated whenever currentSum exceeds its current value. By the end of the iteration, maxSum will contain the maximum sum subarray.

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

### 4. Graphs

#### <<<<-----------Trees----------->>>>

Tree are non-linear. SLL is a special case of tree. In terms of graph a tree is a structure in which there i only one path between 2 nodes.

Treminology : Root- top node; Child- node connected to another node when moving away from root; Parent- Converse node of a child; Sibling: group of nodes with same parents; Leaf: node with no children; Edge: Connection between one node and another, Degree: the total number of children of a node is called the degree of the node.

Use Cases: DOM, Network Routing, OS-folder: directory.

#### Tree Traversal

Traverse functions for Binary Trees/Graphs (Binary Only).

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

#### 4.1 Binary Search Tree (BST)

BST.js code contains complete code for a Binary search tree. Methods just as all tree traversal, inserting, serching and deleted all include in the code.
The only drawback of BST in case of a skewed binary tree the time complexity for the tree can become O(n) instead of O(log(n)) where n is the number of node. To solve this problem we have self balancing tree which insure the time complexity to access a specific node remains O(n).

#### 4.2 AVL Tree

AVL.js code contains complete code fot an AVL tree. Methods such as insertion and deletion are added. Helper methods for rotation are also mentioned in the code. We find a balance factor(BF) for each node and for the tree to be balanced we make sure the the BF has value [-1, 0, 1], this is achived by performing rotations on the nodes whos BF is more or less then the above range. This ensure searching time complexity will be O(log(n)).

 #### 4.3 Heap

heap - similar to tree
Binary Heap similar to BST;
MaxBH - parent nodes are larger then child Node;
MinBH - parent nodes are smaller then child Node
storing heap in array :
* ---Parent to Child relation---
* -> For any "index" of an array - "n"
* -> left child is stored at "index" - "2n + 1"
* -> right child is stored at "index" - "2n + 2"
* ---Child to Parent relation---
* -> For any child node at "index" - "n"
* -> parent is at "index" - "(n-1)/2" <-- floor

##### Insertion 
We use an array to maintain the list. New values are added to the end of the heap. The new value are bubbled up. Max heap larger values are bubbled up, similarly smaller values are bubbled up min heap.

##### Deletion
The value to be deleted is first swapped with the last element and then is popped off. Then the last element is bubbled down to a correct to maintain the min/max structure of the heap.

##### Important UseCase
PriorityQueue -> maintaining a list of element in high to low priority order and serving them one by one according to priority. using bubbling up and down and above heap methods.

##### Complexity:
Insertion - O(logn)
Removal - O(logn)
Search - O(n)

#### <<<<-----------Graphs----------->>>>

##### Ways to store a graphs:
1. Adjcency Matrices - storing graph as a martix with each node represented as a row + column way
2. Adjcency List - string graphs as a list or hashmap with each node as an index or hash key (in case of a string) and as a value they have a list of all the nodes they are connected to.

## Javascript Notes:

### Methods and Concepts

#### 1. Set():
<p>The Set object in JavaScript is a collection of unique values, where each value occurs only once within the set.
<br>It provides methods to add, <strong>add(val)</strong>; remove, <strong>delete(val)</strong> ; and check for the existence, <strong>has(val)</strong> of elements in the set.
<br>The Set is an iterable object, allowing you to iterate over its elements using various techniques like forEach or for...of loops.
<br>It is commonly used when you need to store a collection of unique values or perform operations like deduplicating an array or checking for the presence of specific values.
<br>The Set object is designed to be simple and efficient for tasks involving unique values.</p>

#### 2. Map():

<p>The Map object in JavaScript is a collection of key-value pairs, where each key is unique and can be used to access the corresponding value.
<br>It provides methods to add, remove, and retrieve elements based on their keys.
<br>The Map is an iterable object, allowing you to iterate over its entries using techniques like forEach or for...of loops.
<br>It is commonly used when you need to store and retrieve values based on a specific key or perform operations like mapping keys to corresponding values.
<br>The Map object provides a more flexible and powerful alternative to using plain objects as key-value stores.</p>

### Class JS ES2015 basics:
![](https://github.com/TejveerSingh13/ProblemSkill-/assets/44855917/b42c439c-7d94-45d3-81e8-b1f82cea590d)
![](https://github.com/TejveerSingh13/ProblemSkill-/assets/44855917/49ebe313-8e6d-4515-91ab-df99da4beb45)
