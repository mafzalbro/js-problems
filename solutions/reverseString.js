//  Reverse a String: Write a function to reverse a given string.

const reverseString1 = (str) => {
  const arr = str.split('')
  const reversedArray = arr.reverse();

  return reversedArray.join('');
};



const reverseString2 = (str) => {
  const arr = str.split('')

  const reversedArray = arr.map((_, i) => arr.at( - (i + 1)))

  return reversedArray.join('');
};



const reverseString3 = (str) => {
  const arr = str.split('')

  const reversedArray = []

  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArray.push(arr[i])
  }

  return reversedArray.join('');
};


const str1 = 'afzal is good man'
const str2 = 'afzal is bad man'
const str3 = 'afzal is common man'


const result1= reverseString1(str1);
const result2 = reverseString2(str2);
const result3 = reverseString3(str3);

console.table({
  str1,
  result1
});

console.table({
  str2,
  result2
});

console.table({
  str3,
  result3
});
