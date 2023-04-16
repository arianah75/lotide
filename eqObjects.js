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

module.exports = eqObjects;
