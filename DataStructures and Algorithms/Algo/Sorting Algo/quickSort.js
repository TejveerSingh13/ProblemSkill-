//Approch 1 returning a new array

function quickSort(arr) {
    // Exit condition
    if(arr.length <= 1) return arr
    
    // Pivot process
    let pivot = arr[0]
    let left = [], right = []
    
    // Finding the element to left and right of pivot
    for(let i=1; i<arr.length; i++){
      if(arr[i] < pivot) left.push(arr[i])
      else right.push(arr[i])
    }
  
    // Recurssive calls with pivot in place
    return [...quickSort(left), pivot, ...quickSort(right)]
  }

  //Approch 2 updating input array
  function quickSort(arr, start=0, end = arr.length -1) {
    if(arr.length <= 1 || start >= end) return arr
  
    let pivot = arr[(start+end) >> 1]
    let left = start, right = end
  
    while(left <= right){
      while(left<=right && arr[left] < pivot) left++
      while(left<=right && arr[right] > pivot) right --
      if(left<=right){
        if(left != right) [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
      }
    }
  
    // Important step
    quickSort(arr, start, right);
    quickSort(arr, left, end);
    return arr;
  }