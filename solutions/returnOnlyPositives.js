// Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function positives(arr) {
  let positiveItems = [];
  for (const item of arr) {
    if(item > 0)
    positiveItems.push(item)
  }
  return positiveItems
}

const array = [1, 2, 3, 4, -5, 6, -7, 8, 9];
const result = positives(array);

console.table({ result });
