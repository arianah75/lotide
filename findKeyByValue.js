const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValues = (object, value) => {
  for (const key in object) {
    // console.log(object[key]) => to find the values of the key;
    // console.log(key) => to find the keys of the object
    if (object[key] === value) {
      return key;
    }
  }
  return undefined; // if there is no key with given value in function.
};




//--------TEST---------


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValues(bestTVShowsByGenre, "The Wire"));
console.log("-----------");
assertEqual(findKeyByValues(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValues(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValues(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "sci_fi");
