// missingNumberDetector.js
// Find the Missing Number: Write a function to find the missing number in an array of integers between 1 to 9.


const missingNumberDetector = (arr) => {

    const missing = []

    arr.forEach((num, i) => {    
        
        if(!arr.includes(i) && num !== i)
            missing.push(i)

    })
    
    return missing
}

const array = [1, 2, 3, 4, 6, 7, 8, 9]
const result = missingNumberDetector(array)

console.log({
    result
});
