const assertEqual = require("./assertEqual");

const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      console.log(
        `the items that are also found in itemsToCount object is: ${item}`
      );

      results[item] ? results[item] += 1 : results[item] = 1;
    }
  }
  return results;
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
