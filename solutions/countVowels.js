// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

const countVowels = (str) => {
    const lowerStr = str.toLowerCase()
    const strArr = lowerStr.split('')
    const vowels = ['a', 'e', 'i', 'o', 'u']
    return strArr.reduce((prevChar, currChar) => {
        if(vowels.includes(currChar))
            return prevChar + 1
        else
            return prevChar
    }, 0)


    // in simple terms 
    // return strArr.reduce((prevChar, currChar) => vowels.includes(currChar) ? prevChar + 1 : prevChar, 0)
}

const string = 'Lazy Dog Here My Dear'

const count = countVowels(string)

console.log({ 
    count
 });
