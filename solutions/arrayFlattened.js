//  Array Flattening: Write a function to flatten a nested array.

const arrayFlattenFunc = (arr) => arr.flat(100)

const array = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 , [3, 49]], [ 9, 10, 11 ] ]

const result = arrayFlattenFunc(array)

console.log({
    result,
});

// { result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] }