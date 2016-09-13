// use _.partial function to implement functions:

const _ = require('lodash');
const assert = require('assert');

const addFiveAndSixAnd = _.partial(
  function () {
    return _.reduce(
      arguments,
      function(a, b) {
        return a + b;
      },
      0
    );
  },
  5,
  6
);
const power = _.partial(Math.pow, 2);
const powerTwo = _.partial(Math.pow, _, 2);
const powerThree = _.partial(Math.pow, 3);


console.log(addFiveAndSixAnd(4)); //15 (adds 5 + 6 + 4 = 15)
assert.equal(addFiveAndSixAnd(4), 15);

//Evaluates Math.power(2,3)
console.log(power(3)); //8
assert.equal(power(3), 8);

//Evaluates Math.power(3,2)
console.log(powerTwo(3)); //9
assert.equal(powerTwo(3), 9);

//Evaluates Math.power(3,3)
console.log(powerThree(3)); // 27
assert.equal(powerThree(3), 27);
