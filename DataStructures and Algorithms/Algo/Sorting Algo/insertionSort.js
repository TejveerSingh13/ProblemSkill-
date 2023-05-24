const insertionSort = (arr) => {
    
    const swap = ( i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    for (let i = 0; i < arr.length -1 ; i++) {
        let count = i
        while (count >= 0 && arr[count] > arr[count+1]) {
                swap(count , count+1)
                count --
        }
    }
    return arr
}
const array = [31, 1, 17, 26, 25, 2, 1, 7, 21, 13, 0]
console.table(insertionSort(array))

/**
 * Alternate Solution
 * for(let i = 1; i< arr.length; i++){
 *  let current = arr[i]
 *  for(let j  = i-1; j >= 0 && arr[j] > current; j--){
 *      arr[j+1] = arr[j]
 * }
 *  arr[j+1] = current
 * }
 */
/**
 * Better for already sorted data
 * used when new data is added ot sorted data eg API's
 */