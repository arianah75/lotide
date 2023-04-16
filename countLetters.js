const countLetters = (string) => {
  const result = {};
  for (let letters of string) {
    if (letters !== " ") {
      // IF the value in string is not space follow this...
      if (result[letters]) {
        // IF the letter is in the object, adds 1 to result
        result[letters]++;
      } else {
        result[letters] = 1; // IF the letter doesn't exist in the result object assing it to one.
      }
    }
  }
  return result;
};
module.exports = countLetters;
