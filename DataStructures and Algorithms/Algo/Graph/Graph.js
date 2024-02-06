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

  //   getQueue(){

  //   }

  findSCC(node) {
    let stack = [];
    let visited = {}; // Node : Boolean
    let lowlinks = {}; // Node : LowLink value
    let ids = {}; //Node : ID
    let id = 0;
    let max = -1;

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
        let popNode;
        let count = 0;
        do {
          popNode = stack.pop();
          count++;
        } while (popNode != node);
        max = Math.max(max, count);
      }
    };

    for (let node of Object.keys(this.adjList)) {
      if (!visited[node]) dfs(node);
    }
    return max;
  }

  dfsMemo(queue, N) {
    let memo = new Array(N + 1).fill(-1);
    let max = -1;
    const innerDfs = (node, visited) => {
      if (visited[node]) return 0;
      if (memo[node] != -1) return memo[node];
      visited[node] = true;
      memo[node] = 1 + innerDfs(this.adjList[node][0], visited);
      return memo[node];
    };
    for (let node of queue) {
      let cur = innerDfs(node, {});
      max = Math.max(cur, max);
    }
    return max;
  }
}
function getMaxVisitableWebpages(N, L) {
  let graph = new Graph();
  for (let i = 0; i < N; i++) {
    graph.addNodeAndEdges(i + 1, L[i]);
  }
  function getQueue() {
    let arr = new Array(N).fill(0),
      q = [];
    for (let i = 0; i < N; i++) {
      arr[L[i] - 1]++;
    }
    for (let i = 0; i < N; i++) {
      if (arr[i] == 0) q.push(i + 1);
    }
    return q;
  }
  let queue = getQueue();
  let max = graph.findSCC();
  if (queue.length === 0) return max;
  max = Math.max(graph.dfsMemo(queue, N), max);

  return max;
}

// let L = [2, 4, 2, 2, 3],
//   N = 5;
// console.log("Result -> ", getMaxVisitableWebpages(N, L));

function getMaxVisitableWebpages(N, L) {
  // Adjust the page numbers to be 0-based
  L = L.map((x) => x - 1);

  // Initialize arrays for indegrees, levels, visited nodes, and a queue

  let levels = new Array(N).fill(0);

  let indegrees = new Array(N).fill(0);
  let visited = {};
  let queue = [];

  // Calculate indegrees for each page
  for (let l of L) {
    indegrees[l]++;
  }

  // Find nodes with indegree 0 and add them to the queue
  for (let i = 0; i < N; i++) {
    if (indegrees[i] === 0) {
      queue.push(i);
    }
  }

  // Perform topological sorting and update levels
  while (queue.length > 0) {
    let i = queue.shift();
    visited[i] = true;
    let j = L[i];
    levels[j] = Math.max(levels[j], levels[i] + 1);
    indegrees[j]--;

    if (indegrees[j] === 0) {
      queue.push(j);
    }
  }

  // Initialize dictionaries to keep track of roots and cycle sizes
  let roots = {};
  let cycle_size = {};

  // Function to count the size of a cycle
  function count_cycle(start) {
    if (start in roots) {
      return cycle_size[roots[start]];
    }

    let count = 0;
    let i = start;

    while (true) {
      count++;
      roots[i] = start;
      i = L[i];

      if (start === i) {
        break;
      }
    }

    cycle_size[start] = count;
    return count;
  }

  // Find the maximum chain length by considering cycles
  let max_chain = 0;

  for (let i = 0; i < N; i++) {
    if (!visited[i]) {
      max_chain = Math.max(max_chain, levels[i] + count_cycle(i));
    }
  }

  return max_chain;
}

// Example usage:
let N = 5;
let L = [2, 4, 2, 2, 3];
console.log(getMaxVisitableWebpages(N, L)); // Output: 4
