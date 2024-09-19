// duplicatesRemover.js
// Remove Duplicates: Write a function to remove duplicates from an array.

const duplicateRemover = (arr) => [...new Set(arr)]

const array = [1, 2, 2, 3]
const result = duplicateRemover(array)

console.log({
    result
});
