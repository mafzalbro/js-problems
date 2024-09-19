// Array Chunking: Write a function that splits an array into chunks of a specified size.

// 1. Short Way
const sortedArrayMerger = (arr, arr2) => [...arr, ...arr2]

// 2. Long Way
const sortedArrayMerger2 = (arr, arr2) => {

    const mainArr = []

    for (let i = 0; i < arr.length; i++) {
        mainArr.push(arr[i])
    }
    
    for (let i = 0; i < arr2.length; i++) {
        mainArr.push(arr2[i])
    }

    return mainArr
}

// 2. Long Way (for..of)
const sortedArrayMerger3 = (arr, arr2) => {

    const mainArr = []

    for (const element of arr) {
        mainArr.push(element)        
    }
    
    for (const element of arr2) {
        mainArr.push(element)
    }
    
    return mainArr
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const array2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

const result = sortedArrayMerger(array, array2)
const result2 = sortedArrayMerger2(array, array2)
const result3 = sortedArrayMerger3(array, array2)

console.log({
    result,
    result2,
    result3,
});
