// add whatever parameters you deem necessary
function longestFall(arr) {
	if (arr.length === 0) return 0;
	// variables to store count and the max count
	let count = 1;
	let maxCount = 0;

	// loop through the array
	for (let i = 0; i < arr.length; i++) {
		// when the next value is smaller increase the count
		if (arr[i + 1] < arr[i]) count++;
		else {
			// otherwise update the maxCount with the max of the current count and the maxCount
			maxCount = Math.max(maxCount, count);
			// reset the count
			count = 1;
		}
	}
	return maxCount;
}
