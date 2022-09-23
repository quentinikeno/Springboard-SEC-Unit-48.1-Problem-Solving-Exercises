// add whatever parameters you deem necessary
function pivotIndex(arr) {
	// start with a sum for the right and left side of the array
	// the right sum will be the sum of the entire array
	let rightSum = arr.reduce((value, total) => value + total, 0);
	let leftSum = 0;
	let pivotIdx = -1;
	// loop through the array
	for (let i = 0; i < arr.length; i++) {
		debugger;
		let currentValue = arr[i];
		// add the current value to the leftSum
		leftSum += currentValue;
		// when the leftSum is equal to the rightSum, we've found the pivot
		if (leftSum === rightSum) {
			pivotIdx = i;
			break;
		}
		// otherwise, subtract the current value from the rightSum and continue looping
		rightSum -= currentValue;
	}
	return pivotIdx;
}
