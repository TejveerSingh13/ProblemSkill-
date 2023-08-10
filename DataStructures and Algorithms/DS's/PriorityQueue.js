class Node {
    constructor(val, priority){
        this.value = val,
        this.priority = priority
    }
}

//Implementing Priority Class using Min heap
class PriorityQueue {
    constructor(){
        this.heap = []
    }

    //Helper function 
    swap(arr,a,b){
        [arr[a], arr[b]] = [arr[b], arr[a]]
    }
    bubbleUp(){
        let count = this.heap.length - 1
        if (count > 0) {
            while(count >0 && this.heap[Math.floor((count-1)/2)].priority > this.heap[count].priority){
                // [this.heap[Math.floor((count-1)/2)], this.heap[count]] = [this.heap[count], this.heap[Math.floor((count-1)/2)]]
                this.swap(this.heap, Math.floor((count-1)/2), count)
                count = Math.floor((count-1)/2)
            }
        }
    }
    isValidChildIndex(index){
        return (index < 0 || index > this.heap.length - 1) ? false : true
    }
    bubbleDown(index){
        let leftChildIndex = 2*index + 1
        let leftValid = this.isValidChildIndex(leftChildIndex)
        let maxPriorityChild = leftChildIndex
        while (leftValid) {
            let rightChildIndex = 2*index + 2
            let rightValid = this.isValidChildIndex(rightChildIndex)
            // if right exists and right is > left update max
            if(rightValid && this.heap[rightChildIndex].priority <= this.heap[leftChildIndex].priority) maxPriorityChild = rightChildIndex
            this.swap(this.heap, index, maxPriorityChild)
            index = maxPriorityChild
            leftChildIndex = 2*index + 1
            leftValid = this.isValidChildIndex(leftChildIndex)
            maxPriorityChild = leftChildIndex
        }
    }

    //Main methods
    enqueue(val, priority){
        let node = new Node(val, priority)
        this.heap.push(node)
        this.bubbleUp()
    }

    dequeue(){
        let index = 0;
        
        if(index ===  this.heap.length - 1) return this.heap.pop()
        this.swap(this.heap, index,  this.heap.length - 1)
        let maxPrio = this.heap.pop() // Removing the given item
        if(!this.isValidChildIndex(2*index+1)) return maxPrio // After swap if the node is a child node NoBubbleDown!
        this.bubbleDown(index)
        return maxPrio
    }

    print() {
        console.log(this.heap)
    }

}
let pq = new PriorityQueue()
pq.enqueue(50,3)
pq.enqueue(40,2)
pq.enqueue(30,1)
pq.print()
pq.enqueue(60,1)
pq.print()
pq.enqueue(80,2)
pq.print()
pq.enqueue(45,3)
pq.enqueue(10,3)
pq.enqueue(20,2)
pq.print()

console.log(pq.dequeue())
pq.print()