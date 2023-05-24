const flatten = (arr) => {
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
        if (Array.isArray(arr[index])) {
            newArr = newArr.concat(flatten(arr[index]))
        }
        else newArr.push(arr[index])
    }
    return newArr
}
console.log(flatten([1,[2,3],4,5]))