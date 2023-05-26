const minSubArrayLen = (arr, num) => {
    let start =0
    let total = 0
    let flag =0
    let substr = Infinity
    while (start < arr.length) {
        if (total < num) {
            total += arr[start]
            start++
        }
        if (total >= num) {
            total -= arr[flag]
            flag++
            if(((start - flag) <= substr) && total>=num) {
                substr = start -flag
            }
        }
    }    
    return (substr === Infinity) ? 0 : substr
}

console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95))