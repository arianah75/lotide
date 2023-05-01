const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  //Happy Path
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

// Export Function
module.exports = assertEqual;
