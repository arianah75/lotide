const assertArraysEqual = require("./assertArraysEqual");

const takeUntil = (array, callback) => {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
};

module.exports = takeUntil;
