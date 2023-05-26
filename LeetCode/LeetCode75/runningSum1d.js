/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let na = []
    for(let i = 0; i < nums.length; i++){
       if(i === 0) na.push(nums[i]) 
       else na.push(na[i-1] + nums[i])
    }
    return na
};