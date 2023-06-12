// Node class represents a node in the binary search tree
class Node {
    constructor(val){
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

// BST class represents a binary search tree
class BST {
    constructor(){
        this.root = null;
    }

    // Method to insert a new value into the binary search tree
    insert(val){
        let newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let node = this.root;
        while (node) {
            if (node.value === val) return undefined;
            if (node.value < val) {
                if (node.right) node = node.right;
                else {
                    node.right = newNode;
                    break;
                }
            } else {
                if (node.left) node = node.left;
                else {
                    node.left = newNode;
                    break;
                }
            }
        }
        return this;
    }

    // Method to search for a value in the binary search tree
    search(val){
        if (!this.root) return false;
        if (this.root.value === val) return true;
        let node = this.root;
        while (node.right || node.left) {
            if (node.value < val) {
                if (node.right.value !== val) node = node.right;
                else return true;
            } else {
                if (node.left.value !== val) node = node.left;
                else return true;
            }
        }
        return false;
    }

    BFS() {
        let data = []; // An array to store the values of the nodes in BFS order
        let queue = []; // A queue to keep track of the nodes to be processed
        let node = this.root; // Start from the root node of the BST
        queue.push(node); // Add the root node to the queue
      
        while (queue.length) {
          node = queue.shift(); // Remove the first node from the queue and process it
          data.push(node.value); // Store the value of the processed node
      
          // Add the left and right child nodes of the processed node to the queue
          if (node.left) {
            queue.push(node.left);
          }
          if (node.right) {
            queue.push(node.right);
          }
        }
      
        return data; // Return the array of node values in BFS order
      }

      PreOrder() {
        let data = [] // Initialize an empty array to store node values
        let current = this.root // Start traversal from the root node
        
        // Define a recursive helper function to traverse the tree
        const traverse = (node) => {
            data.push(node.value) // Push the value of the current node into the data array
            if(node.left) traverse(node.left) // Recursively traverse the left subtree
            if(node.right) traverse(node.right) // Recursively traverse the right subtree
        }
        
        traverse(current) // Start the traversal by calling the helper function with the root node
        return data // Return the array containing the pre-order traversal sequence
    }
    
    PostOrder() {
        let data = []; // Array to store node values in post-order traversal order
        let current = this.root; // Set the current node to the root of the tree
        const traverse = (node) => { // Recursive helper function for traversal
            if (node.left) traverse(node.left); // Traverse the left subtree
            if (node.right) traverse(node.right); // Traverse the right subtree
            data.push(node.value); // Append the value of the current node to the array
        };
        traverse(current); // Start the traversal from the root node
        return data; // Return the array of node values in post-order traversal order
    }

    InOrder() {
        let data = []; // Array to store node values in in-order traversal order
        let current = this.root; // Set the current node to the root of the tree
        const traverse = (node) => { // Recursive helper function for traversal
            if (node.left) traverse(node.left); // Traverse the left subtree
            data.push(node.value); // Append the value of the current node to the array
            if (node.right) traverse(node.right); // Traverse the right subtree
        };
        traverse(current); // Start the traversal from the root node
        return data; // Return the array of node values in in-order traversal order
    }
      
}

// Example To Test 

let tree = new BST()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)

console.log('BFS -',tree.BFS());
console.log('Pre -',tree.PreOrder());
console.log('Post -',tree.PostOrder());
console.log('In -',tree.InOrder());
