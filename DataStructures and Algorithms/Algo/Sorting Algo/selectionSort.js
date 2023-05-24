const selectionSort = (arr) => {
    
    const swap = ( i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    for (let i = 0; i < array.length; i++) {
        let min  = i
        for (let j = i+1; j < array.length; j++) {
            if(arr[j] < arr[min]) min = j
        }
        if(min !== i) swap(i, min)
    }
    return arr
}
const array = [31, 1, 17, 26, 25, 2, 7, 21, 13]
console.table(selectionSort(array))

/**
 * Okish algo
 */