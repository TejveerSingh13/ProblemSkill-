/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let len = nums.length 
    if(len === 1) return 0
    const sum = (start, end) => {
        if(end < 0 || start > len-1) return 0
        if(end === 0) return nums[0]
        if(start === len-1) return nums[len -1]
        let sum = 0
        for(let i = start; i <= end; i++){
            sum += nums[i]
        }
        return sum
    }
    for(let i =0; i < len; i++){
            sum1 = sum(0, i-1)
            sum2 = sum(i+1, len-1)
            if(sum1 === sum2) return i
        }
    return -1
};