const middle = array => {
  const middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return (array = []);
  }
  if (array.length % 2 === 1) {
    return [array[middleIndex]];
  }
  return [array[middleIndex - 1], array[middleIndex]];
};

module.exports = middle;
