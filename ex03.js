// Given array of users and helper functions sort, map, nicePrint - put your code in 'younges' function implementation so it will work as expected.

// Tip. - flow is doing same thing as compose in functional programming

const _ = require('lodash');
const assert = require('assert');

const users = [
  { 'user': 'barney',  'age': 36 },
  { 'user': 'fred',    'age': 40 },
  { 'user': 'pebbles', 'age': 1 }
];

/* --- helpers --- */

const sort = _.curry(function(key, collection){
  return _.sortBy(collection, key);
});

const map = _.curry(function(fn, collection){
  return _.map(collection, fn);
});

const nicePrint = function(chr){
  return chr.user + ' is ' + chr.age;
}

/* --- */

const youngest = _.flow([
  sort('age'),
  _.first,
  nicePrint
]);

const youngestMap = _.flow([
  sort('age'),
  map(nicePrint),
  _.first
]);

console.log(youngest(users));
// pebbles is 1
console.log(youngestMap(users));

assert.equal(youngest(users), 'pebbles is 1');
assert.equal(youngestMap(users), 'pebbles is 1');
