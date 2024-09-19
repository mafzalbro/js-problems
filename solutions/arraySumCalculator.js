// Calculate Array Sum: Write a function to calculate the sum of all elements in an array.

const arraySumCalculator = (arr) => arr.reduce((prev, curr) => curr = curr + prev, 0)

const array = [1, 2, 2, 3]
const totalSum = arraySumCalculator(array)

console.log({
    totalSum
});
