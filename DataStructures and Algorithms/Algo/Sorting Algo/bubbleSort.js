const bubbleSort = (arr) => {
	const swap = (arry, index) => { 
		[arry[index], arry[index + 1]] = [arry[index + 1], arry[index]]
		return arry 
	}
	for (let i = arr.length -1 ; i >= 0; i--) {
		for (let j = 0; j < i; j++) {
			if(arr[j] > arr[j+1]) swap(arr,j)
		}
	}
	return arr
}
const array = [31, 1, 17, 26, 25, 2, 7, 21, 13]
console.table(bubbleSort(array));
/**
 * Best for already sorted data
 */