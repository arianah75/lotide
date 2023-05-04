const assertEqual = require('./assertEqual');

const eqObjects = (obj1, obj2) => {
  // Check if the obj 1 and obj2 arrays of keys share the same length.
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  // loop through the keys of obj1
  for (const key in obj1) {
    // Check if the value of obj2  matches.
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

//TEST
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false



module.exports = eqObjects;
