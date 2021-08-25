const { stripQuotes } = require("./index");
function toVerify(actual, expected) {
	return actual === expected;
}

const testCases = [
	{ actual: 'hi this is a new article, , "expected  without quotes"', expected: "hi this is a new article, , expected  without quotes" },
	{ actual: 'hi this "is" a new "article", "expected"  "without quotes', expected: 'hi this is a new article, expected  "without quotes' },
	{ actual: "Hi", expected: "Hi" },
	{ actual: 'Hello"', expected: 'Hello"' },
	{ actual: 'hi this "is" a new "article", "expected"  "without quotes', expected: 'hi this is a new article, expected  "without quotes' },
	{ actual: 'hi this "without quotes', expected: 'hi this "without quotes' }, // case where single side quote and with escape charcter
];

// Small test case to check correctness, not use jest or mocha because of single test functions
testCases.forEach((data) => {
	let { actual, expected } = data;
	let result = toVerify(stripQuotes(actual), expected);
	console.log(`${result ? "case passed" : "case failed"} :`, result);
});
