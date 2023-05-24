const isOdd = val => val % 2 !== 0;
const someRecursive = (arr, fun) => {
    if(arr.length === 1) return fun(arr[0])
    if(!fun(arr[1])) return someRecursive(arr.slice(1), fun)
    return true
}
console.log(someRecursive([1,2,3,4], isOdd));