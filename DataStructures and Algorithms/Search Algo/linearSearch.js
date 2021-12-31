const linearSearch = (arr, value) => {
    let index = -1;
    for (let i = 0 ; i < arr.length; i++){
        if(arr[i] === value) {
            index = i
            break 
        }
      }
  return index
} 
console.log(linearSearch([1,2,3,4,5,6], 4))