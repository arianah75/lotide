const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    const value1 = array1[i];
    const value2 = array2[i];

    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;