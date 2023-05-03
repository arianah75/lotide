const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

// array of nested arrays is out input
// we need to return a single array with all the elements of the nested arrays
// we need to loop through the array and check if the element is an array
// if it is an array we need to loop through the array and push the elements into a new array
// if it is not an array we need to push the element into a new array
// return the new array
// expected output is a single array with all the elements of the nested arrays

const flatten = (nestedArray) => {
  let result = [];
  for (let element of nestedArray) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        result.push(nestedElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};
assertArraysEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]); // => [1, 2, 3, 4]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
module.exports = flatten;