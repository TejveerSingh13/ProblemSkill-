class PriorityQueue {
    constructor(){
        this.values = []
    }
    enqueue(val, priority){
        this.values.push({val, priority})
        this.sort()
    }
    dequeue(){
        return this.values.shift()
    }
    sort(){
        this.values.sort((a,b) => a.priority - b.priority)
    }
}

class WGraph {
    constructor(){
        this.adjList = {}
    }

    addVertex(key){
        if(!this.adjList[key]) this.adjList[key] = [] 
    }

    addEdge(v1, v2, weight){
        if(this.adjList[v1] && this.adjList[v2]){
            if(!this.adjList[v1].some(item => item.node === v2)) this.adjList[v1].push({node: v2, weight})
            if(!this.adjList[v2].some(item => item.node === v1)) this.adjList[v2].push({node: v1, weight}) 
        }
    }

    shortPath(start, end){
        const nodes = new PriorityQueue()
        let distance = {}, previous = {}
        let path = []
        let smallest
        
        //Initializing
        for(let vertex in this.adjList){
            if(vertex === start) {
                distance[vertex] = 0
                nodes.enqueue(vertex, 0)
            }
            else {
                distance[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }
        //As long as theres somthing to visit

        while(nodes.values.length){
            smallest = nodes.dequeue().val
            if(smallest === end){
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if(smallest || distance[smallest] !== Infinity) {
                for(let neighbour in this.adjList[smallest]){
                    let nextNode = this.adjList[smallest][neighbour]
                    let candidate = distance[smallest] + nextNode.weight
                    let nextNodeVal = nextNode.node
                    if(candidate < distance[nextNodeVal])  {
                        distance[nextNodeVal] = candidate
                        previous[nextNodeVal] = smallest
                        nodes.enqueue(nextNodeVal, candidate)
                    }
                }
            }
        }
        console.log(path.concat(smallest).reverse())
    }
}

const g = new WGraph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A","B",4)
g.addEdge("A","C",2)
g.addEdge("B","E",3)
g.addEdge("C","D",2)
g.addEdge("C","F",4)
g.addEdge("D","E",3)
g.addEdge("D","F",1)
g.addEdge("E","F",1)
// console.log(g.adjList);
g.shortPath("B", "F")