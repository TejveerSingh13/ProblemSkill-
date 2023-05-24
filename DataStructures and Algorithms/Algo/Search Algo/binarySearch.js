const binarySearch = (arr, value) => {
    let left = 0
    let right = arr.length -1
    let index = -1
    while (left <= right) {
        let mid = Math.floor((left + right)/2)
        if (arr[mid] === value) return mid
        else if (value < arr[mid]) right = mid - 1
        else if (value > arr[mid]) left = mid + 1
    }
    return index
}
console.log(binarySearch([1,3,4,5,7,8,9,11,13,15], 20));