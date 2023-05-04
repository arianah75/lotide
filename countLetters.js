const countLetters = string => {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") {
      // // IF the value in string is not space follow this...
      // if (result[letter]) {
      //   // IF the letter is in the object, adds 1 to result
      //   result[letter]++;
      // } else {
      //   result[letter] = 1; // IF the letter doesn't exist in the result object assigning it to one.
      result[letter] ? result[letter]++ : result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;
