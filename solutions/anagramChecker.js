//  Anagram Checker: Write a function to check if two given strings are anagrams of each other.

const isAnagram = (str1, str2) => {
    const sortedStr1 = str1.replaceAll(' ', '').split('').sort().join('')
    const sortedStr2 = str2.replaceAll(' ', '').split('').sort().join('')
    return sortedStr1 === sortedStr2    
}


const result = isAnagram('ali bey', 'ail eby') // true
const result1 = isAnagram('hun afzal', 'afzal hun') // true
const result2 = isAnagram('bhai g', 'bahi g') // true
const result3 = isAnagram('sadder', 'dreads') // true
const result4 = isAnagram('silent', 'listen') // true
const result5 = isAnagram('word', 'bird') // false

console.table({
    result,
    result1,
    result2,
    result3,
    result4,
    result5,
});
