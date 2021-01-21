const nums = [1,2,3,4]
let i = 0
let productArray = []
while (i < nums.length) {
    let product = 1
     for (let j = 0; j < nums.length; j++) {
         if (i !== j) {
             product *= nums[j]
         }
         else continue
     }
    productArray.push(product)
    i++
 }
 console.log(productArray)