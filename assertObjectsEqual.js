//--------------PRIVIOUS CODES ------------------



const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};




const eqObjects = (obj1, obj2) => {
  // Check if the objects have the same number of keys
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }
  // Check if each key-value pair in the objects is equal
  for (const key of obj1Keys) {
    if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      // If the key points to an array, use the eqArrays helper function
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else if (typeof obj1[key] === "object" && typeof obj2[key] === "object") {
      // If the key points to another object, recursively call the eqObjects function
      if (!eqObjects(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      // Otherwise, compare the values directly
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
};



//------------------------------------------------------
const assertObjectsEqual = function(actual, expected) {


  const inspect = require('util').inspect; // this line was added.


  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 node assertObjectsEqual.jsAssertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// ================TEST================

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, ba);
assertObjectsEqual(ab, abc);
