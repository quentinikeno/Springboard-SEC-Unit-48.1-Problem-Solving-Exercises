// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
	if (!str1) return true;
	// Create pointers for str1 and str2
	let i = 0;
	let j = 0;
	//Loop through str2
	while (j < str2.length) {
		// If str1[i] matches str2[j] increment i
		if (str1[i] === str2[j]) i++;
		// If we've incremented through the entirety of str1 it is a subsequence
		if (i === str1.length) return true;
		j++; // Increment j
	}
	return false;
}
