const array = [-1, -5, -10, -1100,-1100,-1101, -1102, -9001]
if (array.length === 1) console.log(true)
let incre = 0
let decre = 0
for (let index = 0; index < array.length-1; index++) {
    if ((array[index] >= array[index+1])) incre++
    else if ((array[index] <= array[index+1])) decre++
}
if ((incre > 0 && decre === 0) || (incre === 0 && decre > 0)) console.log(true)
else console.log(false)
