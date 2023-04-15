const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {

  

  for (let i = 0; i < array1.length; i++) {
    const value1 =  array1[i];
    const value2 =  array2[i];
  
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 4,"2", 3]), true); // => should FAIL
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // should PASS


//Gary talked about this cant brute force it