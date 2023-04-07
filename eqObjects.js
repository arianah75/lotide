const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
// ------------------STEPS---------------

// Implement the definition for function eqObjects which will take in two objects and returns true or false, based on a perfect match.




// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!





// ---------------FUNC-------------




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







// ----------TEST---------------

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
//We need to use that return value in combination with assertEquals to test if the function is working correctly.
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);