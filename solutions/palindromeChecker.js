// Palindrome Checker: Write a function to check if a given string is a palindrome or not.

const checkPalindrome = (word) => {
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

    if(sortedArray.length === middleIndex){
        return true
    } else {
        return false
    }
    
}

const isPalindrome = checkPalindrome('12321')
const isPalindrome1 = checkPalindrome('abba')
const isPalindrome2 = checkPalindrome('allug')
const isPalindrome3 = checkPalindrome('abab')

const result = {
        isPalindrome,
        isPalindrome1,
        isPalindrome2,
        isPalindrome3
    }

console.table(result)

