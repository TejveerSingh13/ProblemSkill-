const array = [-1, -5, -10, -1100,-1100,-1101, -1102, -9001]
if (array.length === 1) console.log(true)
let flag = 0
for (let index = 0; index < array.length-1; index++) {
    if ((array[index] >= array[index+1])) continue
    else if ((array[index] <= array[index+1])) continue
    else flag++
}
if (flag === 0) console.log(true)
else console.log(false)