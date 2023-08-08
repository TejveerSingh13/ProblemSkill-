class Node {
    constructor(val){
        this.data  = val;
        this.left = null;
        this.right = null;
        this.height = 0;
    }
}

class AVL  {
    constructor(){
        this.root = null;
    }

    //Utility Functions
    getHeight(node){
        return !node ? -1 : node.height
    }
    getBalanceFactor(node){
        // console.log("BF called", node);
        // if(!node) return 0
        return this.getHeight(node.left) - this.getHeight(node.right)
    }
    height(node) {

        if (node === null) {
          return -1; // Base case: empty tree has path length 0
        }
      
        // Recursively find the longest path for the left and right subtrees
        const leftPath = this.height(node.left);
        const rightPath = this.height(node.right);
      
        // Return the maximum path length from the current node to a leaf node
        return 1 + Math.max(leftPath, rightPath);
    }
    findMin(node){
        while(node.left) node = node.left
        return node
    }

    // Rotations
    /** 
     * X-Y-Z -> rotation around "X"
    **/ 
    leftRotation(x){
        let y = x.right
        let yLeftChild = y.left
        y.left = x
        x.right = yLeftChild
        x.height = this.height(x)
        y.height = this.height(y)
        return y
    }
    rightRotation(x){
        let y = x.left
        let yRightChild = y.right
        y.right = x
        x.left = yRightChild
        x.height = this.height(x)
        y.height = this.height(y)
        return y
    }

    //Insertion 
    insert(data){
        if (this.root) this.root = this.insertHelper(data, this.root)
        else this.root = new Node(data)
    }

    insertHelper(data, node){
        // Insert the node recursively based on its value
        if(!node) return new Node(data)
        if(data < node.data) node.left =  this.insertHelper(data, node.left)
        else if(data > node.data) node.right = this.insertHelper(data, node.right)
        // Update height of the node
        node.height = this.height(node)
        // Perform rotations if necessary to maintain AVL balance
        if(this.getBalanceFactor(node) == 2 && this.getBalanceFactor(node.left) >= 0) return this.rightRotation(node) //Left-Left-Case -> Right-Rotation
        else if(this.getBalanceFactor(node) == 2 && this.getBalanceFactor(node.left) < 0){ //Left-Right-Case -> Left-Right-Rotation
            node.left = this.leftRotation(node.left)
            return this.rightRotation(node)
        }
        else if(this.getBalanceFactor(node) == -2 && this.getBalanceFactor(node.right) <= 0) return this.leftRotation(node) //Right-Right-Case -> Left-Rotation
        else if(this.getBalanceFactor(node) == -2 && this.getBalanceFactor(node.right) > 0){ //Right-Left-Case -> Right-Left-Rotation
            node.right = this.rightRotation(node.right)
            return this.leftRotation(node)
        }

        return node
    }
    //Deletion
    delete(data){
        if(this.root) this.root = this.deleteHelper(data, this.root)
    }

    deleteHelper(data, node){
         // Delete the node recursively based on its value
        if(data < node.data && node.left) node.left = this.deleteHelper(data, node.left)
        else if (data > node.data && node.right) node.right = this.deleteHelper(data, node.right)
        else{
            if(node.data == data){
                if(node.left && node.right){
                    let minVal = this.findMin(node.right)
                    node.data = minVal
                    node.right = this.deleteHelper(node.right)
                }
                else if(node.left) return node.left
                else if(node.right) return node.right
                else return null
            }
        }

        node.height = this.height(node)

        if(this.getBalanceFactor(node) == 2 && this.getBalanceFactor(node.left) >= 0) return this.rightRotation(node) //Left-Left-Case -> Right-Rotation
        else if(this.getBalanceFactor(node) == 2 && this.getBalanceFactor(node.left) < 0){ //Left-Right-Case -> Left-Right-Rotation
            node.left = this.leftRotation(node.left)
            return this.rightRotation(node)
        }
        else if(this.getBalanceFactor(node) == -2 && this.getBalanceFactor(node.right) <= 0) return this.leftRotation(node) //Right-Right-Case -> Left-Rotation
        else if(this.getBalanceFactor(node) == -2 && this.getBalanceFactor(node.right) > 0){ //Right-Left-Case -> Right-Left-Rotation
            node.right = this.rightRotation(node.right)
            return this.leftRotation(node)
        }

        return node
    }

    //Traversal
    PreOrder() {
        let data = [] // Initialize an empty array to store node values
        let current = this.root // Start traversal from the root node
        
        // Define a recursive helper function to traverse the tree
        const traverse = (node) => {
            data.push(node.data) // Push the value of the current node into the data array
            if(node.left) traverse(node.left) // Recursively traverse the left subtree
            if(node.right) traverse(node.right) // Recursively traverse the right subtree
        }
        
        traverse(current) // Start the traversal by calling the helper function with the root node
        return data // Return the array containing the pre-order traversal sequence
    }
}

//Usage ---->>

let tree = new AVL()
tree.insert(15)
tree.insert(25)
tree.insert(35)
console.log('Pre -',tree.PreOrder());
tree.insert(45)
console.log('Pre -',tree.PreOrder());
tree.insert(55)
console.log('Pre -',tree.PreOrder());
tree.insert(65)
console.log('Pre -',tree.PreOrder());
tree.delete(55)
console.log('Pre -',tree.PreOrder());
tree.delete(65)
console.log('Pre -',tree.PreOrder());