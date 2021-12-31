const uniqueValue = (val) => {

    let min = 0
    let value = val[0]  
    let i  = 1
    while (i < val.length) {
        if (value !== val[i]) {
            console.log('inside',val[i]);
            value = val[i]
            min++ 
        }
    i++
    }
    if (min === 0) {
        return min
    }
    return min+1
}
const array = []
console.log(uniqueValue(array));