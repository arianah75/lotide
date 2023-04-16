assertEqual = require("../assertEqual");
findKey = require("../findKey");

findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma"

let object = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};
let actual1 = findKey(object, (x) => x.stars === 2);
let expected1 = "noma";
assertEqual(actual1, expected1);

let actual2 = findKey(object, (x) => x.stars > 1);
let expected2 = "Akaleri";
assertEqual(actual2, expected2);

let actual3 = findKey(object, (x) => x.stars === 99);
let expected3 = undefined;
assertEqual(actual3, expected3);

assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    },
    (x) => x.stars === 1
  ),
  "Blue Hill"
);
