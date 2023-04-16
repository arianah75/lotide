const findKey = function (object, callback) {
  let keysArr = Object.keys(object);
  for (let i = 0; i < keysArr.length; i++) {
    if (callback(object[keysArr[i]])) {
      return keysArr[i];
    }
  }
  return undefined;
};
module.exports = findKey;
