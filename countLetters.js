const countLetters = string => {
  const result = {};
  for (let letter of string) {
    if (letter !== " ") {
      result[letter] ? result[letter]++ : result[letter] = 1;
    }
  }
  return result;
};

module.exports = countLetters;
