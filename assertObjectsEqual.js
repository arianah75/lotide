const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect; // this line was added.

  if (eqObjects(actual, expected)) {
    console.log(
      `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `🛑🛑🛑 node assertObjectsEqual.jsAssertion Failed:  ${inspect(
        actual
      )} !== ${inspect(expected)}`
    );
  }
};
module.exports = assertObjectsEqual;
