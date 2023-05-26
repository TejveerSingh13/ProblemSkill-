const nums = [0,2,1]
let count = 0
let array = []

array.push(nums[count])
while (!array.includes(nums[array[count]])){
    console.log(nums[array[count]])
    array.push(nums[array[count]])
    count++
}
console.log(count + 1)