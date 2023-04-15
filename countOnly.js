const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// const countOnly = (array [contains "items" that we want to count and see how many times the iteam appear], object {contaions which "items" we want to count or not}) => result object { "item" : "number of counts" }

// we want to break down the problem into smaller chunks or functions action into smaller actions.

// 1. look through the [allItems] aka LOOP and store the "item" to a varaible  lets call the varriable = item.
// 2. see if the "item" is found inside the {itemsToCount}, hence we can use bracket notation such as itemsToCount[item].
//
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    console.log(item); // alt way for it  is results[item]++
    if (itemsToCount[item]) {
      console.log(
        `the items that are also found in itemsToCount object is: ${item}`
      );

      // inside the loop,
      // increment the counter for each item:
      //   set a property with that string key to:
      //     the value that was already there (or zero if nothing there) with 1 added to it.

      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

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
