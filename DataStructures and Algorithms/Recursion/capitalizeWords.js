const capitalizeWords = (arr) => {
    if (arr.length === 1) return [arr[0].toUpperCase()] 
    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)))
}
console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']))