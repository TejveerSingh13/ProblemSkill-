/**
 * 
 * @returns sorted array faster if input array in partially sorted 
 */

const bubbleSort = (arr) => {
	const swap = (arry, index) => { 
		[arry[index], arry[index + 1]] = [arry[index + 1], arry[index]]
		return arry 
	}
	for (let i = arr.length -1 ; i >= 0; i--) {
        let ifSwap = true
		for (let j = 0; j < i; j++) {
			if(arr[j] > arr[j+1]) {swap(arr,j); ifSwap = false}
		}
        if(ifSwap) break
	}
	return arr
}