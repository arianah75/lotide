const eqArrays = require("./eqArrays");
const assertArraysEqual = (actual, expected) => {
  if (eqArrays(actual, expected) === false) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

module.exports = assertArraysEqual;
