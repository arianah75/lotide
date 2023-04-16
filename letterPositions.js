const letterPositions = function (sentence) {
  const results = {};
  for (let index in sentence) {
    const character = sentence[index];

    if (!(character === " ")) {
      if (!results[character]) {
        results[character] = [];
      }
      results[character].push(Number(index));
    }
  }
  return results;
};

module.exports = letterPositions;
