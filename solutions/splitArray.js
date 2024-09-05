// Array Chunking: Write a function that splits an array into chunks of a specified size.

const splitArray = (arr, size) => {

    const newArr = []
    const newArr1 = []

    for (let index in arr) {
        index = Number(index)

        if(index % size === 0){   
            const res = arr.slice(index, (index + size))
            newArr.push(res)
        }
    }    
    return newArr
}

// using foreach loop

const splitArray2 = (arr, size) => {
    
    const newArr = []
    
    arr.forEach((_, index) => {
        index % size === 0 && newArr.push(arr.slice(index, (index + size)))
        // if(index % size === 0){
        //     const array = arr.slice(index, (index + size))
        //     newArr1.push(array)
        // }
        
    })
        
    return newArr
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const size = 4

const result = splitArray(array, size)
const result2 = splitArray2(array, size)

console.log({
    result,
    result2,
});

// { result: [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ], [ 9, 10, 11 ] ] }