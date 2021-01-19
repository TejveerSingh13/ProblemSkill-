const array = [
    [1,2,3,4],
    [14,15,16,5],
    [13,20,17,6],
    [12,19,18,7]
]
let column = array[0].length
let row = array.length
console.log("Row-Column", row,column)
let arrayF = []
console.log(arrayF)

const getRowInc = (rowValue,colValue) => {
    let col = colValue
    let colLimit = array[0].length
    if (colValue>0) {
        colLimit = colLimit - colValue
    }
    while (col<colLimit){
        console.log('getRowInc', rowValue,col)
        arrayF.push(array[rowValue][col])
        col++
    }
}
const getColumnInc = (rowValue,colValue) => {
    let rowV = rowValue
    let rowLimit = array.length
    if (rowValue>0) {
        rowLimit = rowLimit - rowValue
    }
    while (rowV <= rowLimit){
        console.log('getColumnInc', rowV,colValue)
        arrayF.push(array[rowV][colValue])
        rowV++
    }
}
const getRowDec = (rowValue,colValue) => {
    let colV = colValue
    let rowDecLimit =0
    if (colValue < column-2) {
        rowDecLimit = (column-2)-colValue
    }
    while (colV >= rowDecLimit) {
        console.log('getRowDec', rowValue,colV)
        arrayF.push(array[rowValue][colV])
        colV--
    }
}
const getColDec = (rowValue,colValue) => {
    let rowV = rowValue
    while(rowV > 0){
        console.log('getColDec', rowV,colValue)
        arrayF.push(array[rowV][colValue])
        rowV--
    }
}

getRowInc(0,0)
getColumnInc(1,column-1)
getRowDec(row-1,column-2)
getColDec(row-2,0)
getRowInc(1,1)
getColumnInc(2,column-2)
getRowDec(row-2,column-3)

console.log(arrayF)