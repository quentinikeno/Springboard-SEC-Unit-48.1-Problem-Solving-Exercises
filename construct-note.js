// add whatever parameters you deem necessary
function constructNote(msg, letters) {
	// If there aren't enough letters for msg return false
	if (letters.length < msg.length) return false;
	// Create a object with the character frequencies for msg and letters
	const msgFrequencies = charFreq(msg);
	const lettersFrequencies = charFreq(letters);
	//Loop over the characters for the msg object
	for (let char of Object.keys(msgFrequencies)) {
		//Check if there are enough characters in the letters object.  If there aren't return false.
		if (lettersFrequencies[char] < msgFrequencies[char]) return false;
	}
	return true;
}

function charFreq(str) {
	// For each character in a string record the frequency of that character in an object.
	const result = {};
	for (let char of str) {
		result[char] = result[char] + 1 || 1;
	}
	return result;
}
