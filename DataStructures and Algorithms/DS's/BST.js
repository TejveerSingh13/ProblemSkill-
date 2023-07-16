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

    // Method to search for a value in the binary search tree returns the found node
    // Method returns the parent node too if flag is true
    search(val, flag = false){
        if (!this.root) return !flag? false : [false, null];
        if (this.root.value === val) return !flag ? this.root : [this.root, null];
        let node = this.root;
        while (node.right || node.left) {
            if (node.value < val) {
                if (node.right.value !== val) node = node.right;
                else return !flag ? node.right : [node.right, node];
            } else {
                if (node.left.value !== val) node = node.left;
                else return !flag ? node.left : [node.left, node];
            }
        }
        return !flag? false : [false, null];
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

    // Method finds the successor of the given node
    // Method returns the parent node too if flag is true
    FindSuccessor(val, flag = false) {
        let node = tree.search(val); // Find the node with the given value in the tree
    
        if (!node) {
        console.log("No node with the passed value exists !");
        return null; // Node not found, return null
        }
    
        if (!node.right && !node.left) {
        console.log("The node is a leaf node. No successor exists");
        return null; // Node is a leaf node, no successor exists, return null
        }
        
        if (node.right === null) {
        console.log("The node doesn't have a right subtree. No successor exists");
        return null; // Node doesn't have a right subtree, no successor exists, return null
        } else {
        // If the node has a right child
        // Find the leftmost node in the right subtree
        let parent = node; // Keep track of the parent node
        let current = node.right; // Start from the right child of the node
    
        while (current.left !== null) {
            parent = current; // Update the parent node
            current = current.left; // Traverse down the left subtree
        }
    
        return !flag ? current : [current, parent]; // Return the successor node, and optionally the parent node, based on the flag
        }
    }
  

    DeleteNode(val) {
        let [node, parent] = tree.search(val, true); // Find the node to delete and its parent
        // Node doesn't exist
        if (!node) return false;
      
        if (node === this.root) {
          // Node is the root
          if (!node.right && !node.left) {
            // Case 1: Root node is a leaf node
            this.root = null;
          } else if (!node.left) {
            // Case 2: Root node has no left subtree
            this.root = node.right;
          } else if (!node.right) {
            // Case 3: Root node has no right subtree
            this.root = node.left;
          } else {
            // Case 4: Root node has both left and right children
            let [succ, succParent] = tree.FindSuccessor(val, true);
            // Check if the successor parent is not the node itself
            if (succParent.value !== node.value) {
              if (succParent && succ.right) {
                succParent.left = succ.right;
              } else if (succParent) {
                succParent.left = null;
              }
              succ.left = node.left;
              succ.right = node.right;
            } else {
              succ.left = node.left;
            }
            this.root = succ;
          }
        } else {
          // Node is a leaf node
          if (!node.right && !node.left) {
            if (parent) {
              if (parent.left && parent.left.value === node.value) parent.left = null;
              else if (parent.right && parent.right.value === node.value) parent.right = null;
            }
          }
          // No right subtree, so no successor
          else if (node.left && !node.right) {
            if (parent) {
              if (parent.left && parent.left.value === node.value) parent.left = node.left;
              else if (parent.right && parent.right.value === node.value) parent.right = node.left;
            }
            node.left = null;
          } else {
            let [succ, succParent] = tree.FindSuccessor(val, true);
            // If the successor parent is not the node itself
            if (succParent.value !== node.value) {
              if (succ.right) {
                succParent.left = succ.right;
              } else succParent.left = null;
      
              succ.left = node.left;
              succ.right = node.right;
            }
            // If the successor parent is the node itself
            else succ.left = node.left;
      
            if (parent) {
              if (parent.left && parent.left.value === node.value) parent.left = succ;
              else if (parent.right && parent.right.value === node.value) parent.right = succ;
            }
            node.left = node.right = null;
          }
        }
        return true; // Node successfully deleted
      }      
}

// Example To Test 

let tree = new BST()
tree.insert(15)
tree.insert(10)
tree.insert(30)
tree.insert(20)
tree.insert(25)
tree.insert(21)
tree.insert(28)
tree.insert(29)
tree.insert(26)
tree.insert(27)
tree.insert(4)
tree.insert(12)
tree.insert(3)
tree.insert(7)
tree.insert(11)
tree.insert(13)
tree.insert(14)

console.log('BFS -',tree.BFS());
console.log('Pre -',tree.PreOrder());
console.log('Post -',tree.PostOrder());
console.log('In -',tree.InOrder());
console.log('------------');
console.log('Delete -',tree.DeleteNode(13));
