const eqObjects = require("./eqObjects");

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  !eqObjects(actual, expected)
    ? console.log(
      `🛑🛑🛑 node assertObjectsEqual.jsAssertion Failed: ${inspect(
        actual
      )} !== ${inspect(expected)}`
    )
    : console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
};

module.exports = assertObjectsEqual;
