const assertEqual = require("./assertEqual");

const findKey = (object, callback) => {
  let result = undefined;
  for (let key in object) {
    if (callback(object[key])) {
      return result = key;
    }
  }
  return result;
};


module.exports = findKey;
