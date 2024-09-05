// Palindrome Checker: Write a function to check if a given string is a palindrome or not.

const checkPalindromeSimple = (word) => {
    if(typeof word === "number") word = String(word);
    const arr = word.split('')
    const revStr = arr.reverse().join('')
    return revStr === word
}

const output = checkPalindromeSimple(11211)

console.table({output});


const checkPalindromeLong = (word) => {
    if(typeof word === "number") word = String(word);

    let sortedArray = []
    const arr = word.split('')
    const middleIndex = Math.floor(arr.length / 2)
    
    arr.map((item, index) => {

        const lastIndex = arr.length - (index + 1)
        const lastItem = arr[lastIndex]

        if(index < middleIndex){
            if(item === lastItem){
                sortedArray.push(item)
            }
        }
        
    })

    
        // if(sortedArray.length === middleIndex){
        //     return true
        // } else {
        //     return false
        // }
    return sortedArray.length === middleIndex
}

const isPalindrome = checkPalindromeLong('12321')
const isPalindrome1 = checkPalindromeLong('abba')
const isPalindrome2 = checkPalindromeLong('allug')
const isPalindrome3 = checkPalindromeLong('abab')
const isPalindrome4 = checkPalindromeLong(12321)

const result = {
        isPalindrome,
        isPalindrome1,
        isPalindrome2,
        isPalindrome3,
        isPalindrome4
    }

console.table(result)

