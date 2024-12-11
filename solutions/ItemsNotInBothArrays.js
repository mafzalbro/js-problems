//  Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

function isExists(arr, number) {
  return arr.includes(number);
}

function ItemsNotInBothArrays(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  const intersectedArray = [];
  for (const item of newArr) {
    if (!(isExists(arr1, item) && isExists(arr2, item))) {
      intersectedArray.push(item);
    }
  }
  return Array.from(new Set(intersectedArray));
}

const firstArray = [1, 3, 5, 7, 9];
const secoundArray = [2, 4, 5, 6, 7, 8];

const result = ItemsNotInBothArrays(firstArray, secoundArray);

console.table({ arr: result, sortedArr: [...result].sort() });
