// Tarjan's Algorithm is used to find SCC - Strongly connected Components OR self-content cycle in a directed graph.
// Tarjan's Algo is able to do this with DFS in a linear time i.e. O(N+E) N nodes, E edges

class Graph {
  constructor() {
    this.adjList = {};
  }

  // Usully 2 different methods are used but here due to special example one method can do
  addNodeAndEdges(from, to) {
    if (!this.adjList[to]) this.adjList[to] = [];
    if (!this.adjList[from]) this.adjList[from] = [];
    if (!this.adjList[from].includes(to)) this.adjList[from].push(to);
    return;
  }

  findSCC(node) {
    let stack = [];
    let visited = {}; // Node : Boolean
    let lowlinks = {}; // Node : LowLink value
    let ids = {}; //Node : ID
    let result = [];
    let id = 0;

    // Helper/Main business logic
    const dfs = (node) => {
      //Setup
      stack.push(Number(node));
      visited[node] = true;
      lowlinks[node] = id;
      ids[node] = id;
      id++;
      // Actual dfs
      for (let neighbour of this.adjList[node]) {
        //first check if its not visited
        if (!visited[neighbour]) dfs(neighbour);
        //if visited , check if in stack
        if (stack.includes(neighbour)) {
          //update lolink of current node
          lowlinks[node] = Math.min(lowlinks[node], lowlinks[neighbour]);
        }
      }

      //Once all neighboutr of current node visited
      if (lowlinks[node] == ids[node]) {
        let components = [];
        let popNode;
        do {
          popNode = stack.pop();
          components.push(popNode);
        } while (popNode != node);
        result.push(components);
      }
    };

    for (let node of Object.keys(this.adjList)) {
      if (!visited[node]) dfs(node);
    }
    // dfs(node);
    console.log(result);
  }
  loop() {
    for (let node of Object.keys(this.adjList)) {
      this.findSCC(node);
    }
  }

  show() {
    console.log(this.adjList);
  }
}

let graph = new Graph();
//Setting the Graph
// graph.addNodeAndEdges(1, 2);
// graph.addNodeAndEdges(1, 3);
// graph.addNodeAndEdges(2, 1);
// graph.addNodeAndEdges(2, 4);
// graph.addNodeAndEdges(3, 4);
// graph.addNodeAndEdges(4, 5);
// graph.addNodeAndEdges(4, 6);
// graph.addNodeAndEdges(5, 3);
// graph.addNodeAndEdges(5, 6);
// graph.addNodeAndEdges(5, 7);
// graph.addNodeAndEdges(6, 8);
// graph.addNodeAndEdges(7, 6);
// graph.addNodeAndEdges(8, 7);
//--------------
graph.addNodeAndEdges(1, 2);
graph.addNodeAndEdges(2, 4);
graph.addNodeAndEdges(3, 2);
graph.addNodeAndEdges(4, 2);
graph.addNodeAndEdges(5, 3);
// //Print graph
graph.show();
graph.findSCC();
// graph.loop();
