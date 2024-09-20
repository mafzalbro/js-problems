// returnLargerNum.js
// Write a functions that gets array of numbers and return larger number

const showLargerNumber = (arr) => {
  return arr.reduce((prev, next) => (next > prev ? next : prev), 0);
};

const array = [1, 2, 3, 4, 5, 6, 10, 8, 20, 40];
const array2 = [ -5, -2, -6, 1, -10];

const result = showLargerNumber(array);
const result2 = showLargerNumber(array2);

console.log({
  result,
  result2
});


