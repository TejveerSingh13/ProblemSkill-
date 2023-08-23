// Implemented using adjacency List 
// Currently the graph would be Bi-directional
class Graph {
    constructor(){
        this.adjList = {}
    }

    addVertex(key){
        if(!this.adjList[key]) this.adjList[key] = [] 
    }

    addEdge(v1, v2){
        if(this.adjList[v1] && this.adjList[v2]){
            if(!this.adjList[v1].includes(v2)) this.adjList[v1].push(v2)
            if(!this.adjList[v2].includes(v1)) this.adjList[v2].push(v1) 
        }
    }

    removeEdge(v1, v2){
        if(this.adjList[v1] && this.adjList[v2]){
            if(this.adjList[v1].includes(v2)) this.adjList[v1] = this.adjList[v1].filter(v => v !== v2)
            if(this.adjList[v2].includes(v1)) this.adjList[v2] = this.adjList[v2].filter(v => v !== v1) 
        }
    }

    removeVertex(key){
        if(this.adjList[key] && this.adjList[key].length > 0){
            for(let ele of this.adjList[key]){
                this.removeEdge(key, ele)
            }
        }
        if(this.adjList[key]) delete this.adjList[key]
    }
}

let g = new Graph()
g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.addVertex(4)
g.addEdge(1,2)
g.addEdge(1,4)
g.addEdge(3,2)
g.addEdge(2,1)
console.log(g)
// g.removeEdge(3,2)
g.removeVertex(2)
console.log(g);