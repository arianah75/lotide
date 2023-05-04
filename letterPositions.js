const assertArraysEqual = require("./assertArraysEqual");

const letterPositions = (sentence) => {
  const results = {};
  for (const index in sentence) {
    const letter = sentence[index];

    if (letter !== " ") {
      results[letter] === undefined
        ? (results[letter] = [Number(index)])
        : results[letter].push(Number(index));
    }
  }
  return results;
};

///////// Test ////////////
assertArraysEqual(letterPositions("hello").e, [1]);



module.exports = letterPositions;
