const maxSubarraySum = (arr, window) => {
    
    if(window > arr.length) return null

    let max = 0
    for (let index = 0; index < window; index++) {
        max += arr[index];       
    }
    let maxHolder =max
    for (let index = window; index < arr.length; index++) {
        const newmax = maxHolder + arr[index] - arr[index - window]
        if(newmax > max) max = newmax
        maxHolder = newmax 
    }
    return max
}

console.log(maxSubarraySum([100,200,300],3))