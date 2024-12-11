//  Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second

function isExists(arr, number) {
  return arr.includes(number);
}

function itemInFirstArray(arr1, arr2) {
  const newArr = [...arr1, ...arr2];
  const intersectedArray = [];
  for (const item of newArr) {
    if (isExists(arr1, item) && !isExists(arr2, item)) {
      intersectedArray.push(item);
    }
  }
  return Array.from(new Set(intersectedArray));
}

const firstArray = [1, 3, 5, 7, 9];
const secoundArray = [2, 4, 5, 6, 7, 8];

const result = itemInFirstArray(firstArray, secoundArray);

console.table({ arr: result, sortedArr: [...result].sort() });
