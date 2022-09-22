// add whatever parameters you deem necessary
function separatePositive(arr) {
	// Create two pointers one at the end and one at the beginning
	let left = 0;
	let right = arr.length - 1;

	// Loop through the array with the pointers
	while (left < right) {
		// If left is negative and right is positive swap them
		if (arr[left] < 0 && arr[right] > 0) {
			[arr[left], arr[right]] = [arr[right], arr[left]];
			left++;
			right--;
		} else if (arr[left] > 0) {
			// If the left is positive increment left
			left++;
		} else {
			// If the right is negative decrement right
			right--;
		}
	}
	return arr;
}
