const averagePair = (arr, avg) => {
    if (arr.lenght === 0) return false
    const value = avg*2
    let point = 0
    const obj = {}
    for (const key of arr){
        obj[key] = (obj[key] || 0) + 1
    }
    while (point <arr.length) {
        if (obj.hasOwnProperty(value-arr[point])) return true 
        point ++
    }
    return false
}
console.log(averagePair([1,3,5],2.5))