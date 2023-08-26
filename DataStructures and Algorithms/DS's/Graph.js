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

    DFS_R(key){
        let nodes = []
        let visitdNodes = {}
        const dfs = (current) => {
            visitdNodes[current] = true
            nodes.push(current)
            this.adjList[current].forEach(neighbour => {
                if(!visitdNodes[neighbour]) dfs(neighbour)
            });
        }
        dfs(key)
        return nodes
    }

    DFS_I(key){
        let stack = []
        let result = []
        let visitdNodes = {}
        stack.push(key)
        visitdNodes[key] = true
        while(stack.length){
            let current = stack.pop()
            result.push(current)
            for(let ele of this.adjList[current]) {
                if(!visitdNodes[ele]){
                    visitdNodes[ele] = true
                    stack.push(ele)
                }
            }
        }
        return result
    }
}

let g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("D","B")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("F","E")
console.log(g)
console.log(g.DFS_I("D"))
// g.removeEdge(3,2)
// g.removeVertex(2)
// console.log(g);