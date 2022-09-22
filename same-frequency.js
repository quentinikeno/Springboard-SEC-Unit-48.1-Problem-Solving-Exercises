// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {
	// Make frequency counters for both num1 and num2
	const num1Freq = digitFreq(num1);
	const num2Freq = digitFreq(num2);
	// Check if the frequency counters are equal
	if (num1Freq.size !== num2Freq.size) return false;
	for (let key of num1Freq.keys()) {
		if (num1Freq.get(key) !== num2Freq.get(key)) return false;
	}
	// frequency counters are equal
	return true;
}

function digitFreq(num) {
	// For each character in a string record the frequency of that character in an object.
	const result = new Map();
	for (let digit of String(num)) {
		let count = result.get(digit) || 0;
		result.set(digit, count + 1);
	}
	return result;
}
