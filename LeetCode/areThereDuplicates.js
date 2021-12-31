const areThereDuplicates = (...props) => {
    const obj = {}
    for (const key of props) {
        if (obj[key]) return true
        obj[key] = 1
    }
    return false
}
console.log(areThereDuplicates(1,2,3,4,5,6))