const flatten = (nestedArray) => {
  let result = [];
  for (let element of nestedArray) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        result.push(nestedElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = flatten;