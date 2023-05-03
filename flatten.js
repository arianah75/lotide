const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

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

// Test //
assertArraysEqual(flatten([1, 2, [3, 4]]), [1, 2, 3, 4]); // => [1, 2, 3, 4]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // => [1, 2, 3, 4, 5, 6]
