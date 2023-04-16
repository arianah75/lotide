const middle = function (array) {
  const lengthOfArray = array.length; // easier to read
  const middleIndex = Math.floor(lengthOfArray / 2);
  //we want to divide the length of an array by 2 so we find middle. If it is odd arry such as : [1,2,3], or [i=0,i=1,i=2]  we want to round it down to to a whole number since if we divide the array's length (array.length) (3)/2= we will get (1.5) . so by using Math.floor the output of length will be (1). Index[1] of mentioned array is 2.

  if (lengthOfArray <= 2) {
    return (array = []);
    // if the array has less than 2 elements , return empty [].
  } else if (lengthOfArray % 2 === 1) {
    return [array[middleIndex]]; // we want it to be in array form.
  } else {
    return [array[middleIndex - 1], array[middleIndex]];
    //   the main reason we used the [middleIndex -1] is for example even array such as [1,2,3,4] is divided by 2 the output will be 2, but the index of 2 in array is (3) that is one number higher than what we want to come first. we want it to be (2) then (3) so we subtract it by 1.
  }
};
module.exports = middle;
