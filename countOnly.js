const assertEqual = require("./assertEqual");

const countOnly = (allItems, itemsToCount) => {
  const result = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      console.log(
        `the items that are also found in itemsToCount object is: ${item}`
      );

      result[item] === undefined ? result[item] = 1 : result[item] ++;
    }
  }
  return result;
};

////////// Test ////////////
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
