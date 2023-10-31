class Node {
    constructor (val = ''){
        this.val = val;
        this.child = new Map();
        this.end = false;
    }
}

class Trie {
    constructor(){
        this.root = new Node()
    }

    insert(word){
        if(!word) return false

        let current = this.root
        for(let char of word){
            if(!current.child.has(char)){
                current.child.set(char,new Node(char))
            }
            current = current.child.get(char)
        }

        current.end = true
        return current
    }

    hasWord(word, start=this.root){
        if(!word) return false

        let current = start
        for(let char of word){
            if(!current.child.has(char)) return false
            current = current.child.get(char)
        }
        
        return current
    }

    findAllWPrefix(prefix){
        let lastNode = this.hasWord(prefix)
        if(!lastNode) return false
        let words = []
        if(lastNode.end) words.push(prefix)
        lastNode.child.forEach(ele => {
            this.wordSearch(ele, prefix, words)
        });
        return words
    }

    wordSearch(node, prefix, words){
        if(!node) return
        prefix = prefix + node.val
        if(node.end){
            words.push(prefix)
        }
        node.child.forEach(ele => {
            this.wordSearch(ele, prefix, words)
        });
    }

    fetchALl(){
        let current = this.root
        let words = []
        current.child.forEach(ele => {
            this.wordSearch(ele, '', words)
        });
        return words
    }

    show(){
        console.log(this.root)
    }
}

const trie = new Trie()
trie.insert('bat')
trie.insert('bar')
trie.insert('bars')
trie.insert('art')
// trie.show()
// console.log(trie.hasWord('ba'));
// console.log(trie.findAllWPrefix(''))
console.log(trie.fetchALl())
