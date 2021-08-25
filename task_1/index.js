// Write a function in JavaScript that will strip quote characters from a string. An example usage of this function would be ensuring that a string which will be quoted in an article (such as in an editorial sidebar or testimonial block on a page) does not contain quotes in the string itself.
//
/**
 * @Assumtion remove all the quotes from string
 * @description remove all the double quotes from string, if need to add extra single quotes just need to add into regex
 * @param  { any string } str
 */
exports.removeAllQuote = function stripQuotes(str) {
	return str.replace(/['"]+/g, "");
};

/**
 * @description Remove quote where string is in quote.
 * @param  {} a
 * @example str = 'strip quote characters "from" a string' => output = strip quote characters "from" a string
 * @example str = 'strip quote characters "from a string' => output = strip quote characters "from a string // Only single quote
 * @case it will not remove single quote only remove if quote start and end in same string.
 */
exports.stripQuotes = function RemoveDoubleQuotes(str) {
	let stack = [];
	let posToRemove = [];
	let arr = str.split("");
	// used array iteration because string is immutable and every changes in string create new string
	for (let i in str) {
		if (str[i] == '"' && stack.length) {
			let pos = stack.pop();
			posToRemove.push(pos, i);
		} else if (str[i] == '"' && stack.length == 0) {
			stack.push(i);
		}
	}
	posToRemove.forEach((pos) => {
		arr[pos] = null;
		// remove escape character if it have any before quote; this will always avoid by compiler but just shake of information i added.
		if (arr[pos - 1] == "\\") {
			arr[pos - 1] = null;
		}
	});
	return arr.reduce((acc, data) => {
		if (data) acc += data;
		return acc;
	}, "");
};

