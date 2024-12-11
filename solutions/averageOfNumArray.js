// Calculate the average of the numbers in an array of numbers
function average(arr) {
  let sum = 0;
  for (const item of arr) {
    sum += item;
  }
  const ave = sum / arr.length;
  return ave;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = average(array);

console.table({ result });
