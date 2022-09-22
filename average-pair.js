// add whatever parameters you deem necessary
function averagePair(arr, target) {
	// return false if the array is empty
	if (arr.length === 0) return false;
	// create two pointers for the array one starting at the beginning and on at the end
	let left = 0;
	let right = arr.length - 1;

	// return false if target is < lowest val or > than highest val.
	if (target < arr[left] || target > arr[right]) return false;

	// change the pointers until a result is found
	while (left < right) {
		const avg = (arr[left] + arr[right]) / 2;
		// if the avg is equal to the target return true
		if (avg === target) return true;
		// if the avg is > than the target decrement right for a lower value.  Otherwise increment left for a higher value.
		avg > target ? right-- : left++;
	}

	// the entire array has been searched and no result found
	return false;
}
