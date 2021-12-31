const merge = (arr1, arr2) => {
    const newArr = []
    let i = 0
    let j = 0
    console.log(i,j);
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i])
            i++
        }else{
            newArr.push(arr2 [j])
            j ++
        }
    }
    while (j < arr2.length) {
        newArr.push(arr2[j])
        j++
    }
    while (i < arr1.length) {
        newArr.push(arr1[i])
        i++
    }
    
    return newArr
}
const mergeSort = (arr) => {
    if (arr.length <= 1) return arr
    let half = Math.floor(arr.length /2)
    let left = mergeSort(arr.slice(0, half))
    let right = mergeSort(arr.slice(half))
    return merge(left, right)
}
// console.log(merge([2,4,5,7],[1,5,8,9,13]))
console.table(mergeSort([2,4,5,7,1,5,8,9,13]));
