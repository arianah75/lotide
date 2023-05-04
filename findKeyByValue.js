const assertEqual = require("./assertEqual");

const findKeyByValue = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
  // for (const key in object) {
  //   if (object[key] === value) {
  //     return key;
  //   }
  // }
  // return undefined; // if there is no key with given value in function.
};

// Test ////
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
module.exports = findKeyByValue;
