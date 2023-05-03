const middle = array => {
  const middleIndex = Math.floor(array.length / 2);
  if (array.length <= 2) {
    return (array = []);
  } else if (array.length % 2 === 1) {
    return [array[middleIndex]];
    //odd number of array return only one element in array
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
    //even number of elements in the array return an array with two elements
  }
};

module.exports = middle;
