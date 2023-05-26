const array = [2,1,2,2,2,3,4,2]
const toMove = 2
console.log(array)
let pointer = array.length - 1
 for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    if (element === toMove) {
        if (pointer !== index) {
            array[index] = array[pointer]
            array[pointer] = element
            pointer--
        }
        if (pointer === index) {
            pointer--
        }
    }
 }
 console.log(array)
