# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @arianah/lotide`

**Require it:**

`const _ = require('@arianah/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: a function that asserts that if  two arrays are equal.
* `assertEqual` : a function that asserts if two values are equal.
* `assertObjectsEqual` : a function that asserts that if two objects are equal.
* `countLetters` : function that counts the number of letters in a string.
* `countOnly` : a function that counts specific element in an array and returns an object with the number of times that specific element was repeated.
* `eqArrays` : a function that compares two arrays.
* `eqObjects` : a function that compares two objects.
* `findKey` : a function that goes through an object and returns the first key for matching value in argument. 
* `findKeyByValue` : a function that takes an object and value as argument. It goes through the object and returns the instance if the value of the key matches the value in the function argument.
* `head` : a function that takes an array and returns first element of the array.
* `letterPositions` : a function that accepts a string and returns an object with letters as keys and the position of the letters as values.
* `map` : a function prototype of Array.prototype.map(), it takes an array and callback function as arguments. It modifies the original array and returns the new array based on the callback function.
* `middle` : a function that takes an array as argument and returns the middle element of the array. If the array is even length, it returns the two middle elements of the array, otherwise it returns the middle element of the array, unless the array's length is 2 or less, it will return empty array.
* `tail` : a function that takes an array and returns all elements beside the first element of the array.
* `takeUntil` : a function that takes an array and callback function as arguments. it will return all the element of the array until the callback function returns true.
* `without` : a function that takes two arrays as arguments and returns a new array containing all the elements of first array except the ones were in second array.