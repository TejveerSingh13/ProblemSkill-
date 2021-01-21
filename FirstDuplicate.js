const array = [2,1,5,3,3,2,4]
let numberIndex,index = 0
let flag = true
for (let i = 0; i < array.length-1; i++) {
    index =i
    for (let j = i+1; j < array.length; j++) {
        if ((array[i] === array[j]) && flag) {
            numberIndex = j
            flag = false
        }
        if ((array[i] === array[j]) && numberIndex > j && !flag) {
            numberIndex = j
        }
    }
}
console.log(array[numberIndex])