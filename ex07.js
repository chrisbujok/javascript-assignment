/*
Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).

Example

    var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

    console.log(countWords(inputWords))

    // =>
    // {
    //   Apple: 2,
    //   Banana: 1,
    //   Durian: 3
    // }

*/

const assert = require('assert');

function countWords(words) {
  return words.reduce(
    (state, current) => Object.assign(
      state,
      {
        [current]: current in state ? state[current] + 1 : 1
      }
    ),
    {}
  )
}

var inputWords = ['Apple', 'Banana', 'Apple', 'Durian', 'Durian', 'Durian']

console.log(countWords(inputWords));

assert.deepEqual(
  countWords(inputWords),
  {
    Apple: 2,
    Banana: 1,
    Durian: 3
  }
);
