const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {

    return false;

  }
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {

      return false;
    }
  }
  return true;
};

//The document provides instructions to create a function called "letterPositions" in the Lotide project folder, which returns an object containing the positions of each letter in a given string. It gives steps to follow to create the function, including defining the object structure to return, writing a test, and implementing the function's logic. The document also provides tips for writing the test and implementing the function.








// const letterPositions = function(sentence) {
//   const results = {};
//   // logic to update results here
//   for (let index in sentence) {
//     console.log(index);
//     // check if result [index] is null
//     //if it is then we make it into a empty list
//     // add results[index] += [value]
    
//   }
//   return results;
// };
const letterPositions = function(sentence) {
  const results = {};
  for (let index in sentence) {
    const character = sentence[index];
    // if the character is space then break out of the
    
    if (!(character === ' ')) {

      if (!results[character]) {
        results[character] = [];
      }
      results[character].push(Number(index));
  
    }
  }
  return results;
};

// const letterPositions = function(sentence) {
//   const results = {};
//   for (let index in sentence) {
//     const character = sentence[index];
//     // if the character is space then break out of the
//     if (character === ' ') {
//        continue;
//       }
      
//     if (!results[character]) {
//       results[character] = [];
//     }
//     results[character].push(index);
//   }
//   return results;

// };




console.log(letterPositions("lighthouse in the house"));


assertArraysEqual(letterPositions("hello").e, [1]);
// assertArraysEqual(letterPositions("hello").e, [1]);






// ============= LOG===============
//  {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
//  }
