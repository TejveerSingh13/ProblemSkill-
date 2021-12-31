const sameFrequency = (num1, num2) => {
    const a = num1.toString()
    const b = num2.toString()
    if(a.length !== b.length) return false
    const obj1 = {}
    for (const key of a) {
        obj1[key] = (obj1[key] || 0) + 1
    }
    for (const key of b) {
        if(!obj1[key]) return false
        obj1[key] -= 1
    }
    return true
}

console.log(sameFrequency(0,0));
// sameFrequency(240,402)