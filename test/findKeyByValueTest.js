const assertEqual = require("../assertEqual");
const findKeyByValues = require("../findKeyByValue");
const bestTVShowsByGenre = {
  // eslint-disable-next-line camelCase
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};
console.log(findKeyByValues(bestTVShowsByGenre, "The Wire"));
console.log("-----------");
assertEqual(findKeyByValues(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValues(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(
  findKeyByValues(bestTVShowsByGenre, "Brooklyn Nine-Nine"),
  "sci_fi"
);
