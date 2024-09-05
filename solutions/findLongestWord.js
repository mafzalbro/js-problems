//  Find the Longest Word: Write a function that takes a string and returns the longest word in it.

// const findLongestWord = (str) => {

//     const arr = str.split(' ');

//     const longestWord = arr.reduce((prevWord, currWord) =>  prevWord.length < currWord.length ? currWord : prevWord)

//     return {arr, str, longestWord}
// }

const findLongestWordShort = (str) => str.split(' ').reduce((prevWord, currWord) =>  prevWord.length < currWord.length ? currWord : prevWord)

const string = 'Hey, my name is Afzal! A Web_Engineer !'

const result = findLongestWordShort(string)

console.log({
    longestWord: result,
}); // { longestWord: 'Web_Engineer' }

console.table({
    longestWord: result,
});