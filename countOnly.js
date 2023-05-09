const countOnly = (allItems, itemsToCount) => {
  const result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      result[item] === undefined ? result[item] = 1 : result[item] ++;
    }
  }
  return result;
};

module.exports = countOnly;
