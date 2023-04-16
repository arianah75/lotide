const without = function (source, itemsToRemove) {
  for (let i = 0; i < source.length; i++) {
    for (let x = 0; x < itemsToRemove.length; x++) {
      if (source[i] === itemsToRemove[x]) {
        source.splice(i, 1);
      }
    }
  }
  return source;
};
module.exports = without;
