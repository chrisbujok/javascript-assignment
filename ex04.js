// Convert the following code from a for-loop to Array#map:
// * Your solution should use Array.prototype.map()
// * Do not use any for/while loops or Array.prototype.forEach.
// * Do not create any unnecessary functions e.g. helpers.

const assert = require('assert');

function doubleAll(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    result.push(numbers[i] * 2)
  }
  return result
}

function doubleAllMap(numbers) {
  return numbers.map(number => number * 2);
}

console.log(doubleAllMap([1, 2, 3, 4, 5]));

assert.deepEqual(
  doubleAll([1, 2, 3, 4, 5]),
  doubleAllMap([1, 2, 3, 4, 5])
);
