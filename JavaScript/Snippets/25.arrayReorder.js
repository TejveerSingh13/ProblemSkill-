/**
 * @param {any[]} items
 * @param {number[]} newOrder
 * @return {void}
 */
function sort(items, newOrder) {
    let n = items.length
    for(let i=0; i<n; i++){
      while(newOrder[i] != i){
        swap(items, i, newOrder[i])
        swap(newOrder, i, newOrder[i])
      }
    }
  }
  
  function swap(arr, a, b){
    return [arr[a], arr[b]] = [arr[b], arr[a]]
  }