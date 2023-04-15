
const eqArrays = function(array1, array2) {
  if (array1.lengthOfArray !== array2.lengthOfArray) {
    return false;
  }
  for (let i = 0; i < array1.lengthOfArray; i++) {
    if (Array.isArray(array1[i]) && (eqArrays(array1[i], array2[i]) === false)) {
      return false;
    }
    if (!(Array.isArray(array1[i])) && array1[i] !== array2[i]) {

      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

// for arrays with odd number of elements. Only one single middle element should be returned.
// for arrays with an even number of elements, an array containing the two elements in the middle should be returned.

// steps.
// 1. IF our array has 3 or more elements IF not return back empty.
// 2. IF our array has ODD number of array.lengthOfArray RETURN the middle (one) element.
// 3. IF our array has EVEN number of array.lengthOfArray RETURN the middle (two) elements.

const middle = function(array) {
  const lengthOfArray = array.length;   // easier to read
  const middleIndex = Math.floor(lengthOfArray / 2);
  //we want to divide the length of an array by 2 so we find middle. If it is odd arry such as : [1,2,3], or [i=0,i=1,i=2]  we want to round it down to to a whole number since if we divide the array's length (array.length) (3)/2= we will get (1.5) . so by using Math.floor the output of length will be (1). Index[1] of mentioned array is 2.
  
  if (lengthOfArray <= 2) {
    return array = [];
    // if the array has less than 2 elements , return empty [].
    
  } else if (lengthOfArray % 2 === 1) {
      
    return [array[middleIndex]]; // we want it to be in array form.
      
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
    //   the main reason we used the [middleIndex -1] is for example even array such as [1,2,3,4] is divided by 2 the output will be 2, but the index of 2 in array is (3) that is one number higher than what we want to come first. we want it to be (2) then (3) so we subtract it by 1.
  }
};
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []