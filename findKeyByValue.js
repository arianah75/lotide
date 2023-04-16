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
module.exports = findKeyByValues;
