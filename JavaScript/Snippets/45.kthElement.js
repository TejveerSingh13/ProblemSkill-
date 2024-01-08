// Approch One using Priority Queue
/**
 * Time Complexity: O(N * log(N) + K * log(N))
 * Space Complexity: O(N)
 */

/**
 * @param {number[]} arr
 * @param {number} k
 */
class PriorityQ {
  constructor() {
    this.heap = [];
  }

  swap(heap, left, right) {
    [heap[left], heap[right]] = [heap[right], heap[left]];
  }

  insert(ele) {
    this.heap.push(ele);
    this.bubbleUp();
  }
  bubbleUp() {
    let current = this.heap.length - 1;
    while (
      current > 0 &&
      this.heap[Math.floor((current - 1) / 2)] < this.heap[current]
    ) {
      this.swap(this.heap, Math.floor((current - 1) / 2), current);
      current = Math.floor((current - 1) / 2);
    }
  }

  pop() {
    this.swap(this.heap, 0, this.heap.length - 1);
    let ele = this.heap.pop();
    this.bubbleDown();
    return ele;
  }
  bubbleDown() {
    let current = 0;
    let left = 2 * current + 1,
      right = 2 * current + 2;

    while (left < this.heap.length) {
      let max = left;

      if (right < this.heap.length && this.heap[right] > this.heap[left]) {
        max = right;
      }
      if (this.heap[current] > this.heap[max]) break;

      this.swap(this.heap, current, max);
      current = max;
      left = 2 * current + 1;
      right = 2 * current + 2;
    }
  }

  print() {
    console.log(this.heap);
  }
}
function findKThLargest(arr, k) {
  // your code here
  let queue = new PriorityQ();
  for (let num of arr) {
    queue.insert(num);
  }
  queue.print();
  let element;
  for (let i = 0; i < k; i++) {
    element = queue.pop();
  }
  return element;
}

//Approch 2 Quick Select
function partition(arr, low, high) {
  const pivot = arr[Math.floor((low + high) / 2)]; // Center element as pivot
  let i = low;
  let j = high;

  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      // Swap arr[i] and arr[j]
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }

  return i;
}

function quickSelect(arr, low, high, k) {
  if (low === high) {
    return arr[low];
  }

  const pivotIndex = partition(arr, low, high);

  if (k === pivotIndex) {
    return arr[k];
  } else if (k < pivotIndex) {
    return quickSelect(arr, low, pivotIndex - 1, k);
  } else {
    return quickSelect(arr, pivotIndex, high, k);
  }
}

function findKthLargest(arr, k) {
  if (k < 1 || k > arr.length) {
    return null; // Handle invalid input
  }

  return quickSelect(arr, 0, arr.length - 1, arr.length - k); // Find Kth largest
}
