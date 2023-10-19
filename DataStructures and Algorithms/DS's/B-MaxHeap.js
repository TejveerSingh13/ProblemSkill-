class Heap {
    constructor(){
        this.heap = []
    }
    
    //Helper function 
    swap(arr,a,b){
        [arr[a], arr[b]] = [arr[b], arr[a]]
    }
    bubbleUp(){
        let count = this.heap.length - 1
        if (count>1) {
            while(count >=0 && this.heap[Math.floor((count-1)/2)] < this.heap[count]){
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
        let maxChild = leftChildIndex
        while (leftValid) {
            let rightChildIndex = 2*index + 2
            let rightValid = this.isValidChildIndex(rightChildIndex)
            // if right exists and right is > left update max
            if(rightValid && this.heap[rightChildIndex] > this.heap[leftChildIndex]) maxChild = rightChildIndex
            this.swap(this.heap, index, maxChild)
            index = maxChild
            leftChildIndex = 2*index + 1
            leftValid = this.isValidChildIndex(leftChildIndex)
            maxChild = leftChildIndex
        }
    }

    //Main methods
    insert(val){
        this.heap.push(val)
        this.bubbleUp()
    }

    delete(val){
        let index = this.heap.indexOf(val)
        if(!this.isValidChildIndex(index)) return false //if value doesnt exist in the heap
        if(index ===  this.heap.length - 1) {
            this.heap.pop()
            return true
        }
        this.swap(this.heap, index,  this.heap.length - 1)
        this.heap.pop() // Removing the given item
        if(!this.isValidChildIndex(2*index+1)) return true // After swap if the node is a child node NoBubbleDown!
        this.bubbleDown(index)
        return true
    }

    print() {
        console.log(this.heap)
    }
}

const heap = new Heap()
heap.insert(1)
heap.insert(3)
heap.insert(2)
heap.print()
// heap.insert(5)
// heap.print()
// heap.insert(80)
// heap.print()
// heap.insert(45)
// heap.insert(10)
// heap.insert(20)
// heap.print()
// heap.delete(80)
// heap.print()