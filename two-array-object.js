// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {
	// Use reduce on keys to create an object
	return keys.reduce((result, key, i) => {
		// Set value for each key in result to be the corresponding value in values or null
		result[key] = values[i] || null;
		return result;
	}, {});
}
