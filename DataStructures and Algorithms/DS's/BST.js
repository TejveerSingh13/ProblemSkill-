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
        let count = 0;
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
}