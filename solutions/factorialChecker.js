//  Factorial Calculator: Write a function to calculate the factorial of a given number.


const checkFactorial = (number) => {
    if(number < 0) return
    let n = 1;
    for (let i = number; i > 0; i--) {
        // console.log(i);
        n = n * i
        // console.log(n);
        
    }
    
    return n
}

const result = checkFactorial(3)
const result1 = checkFactorial(4)

console.log({
    result,
    result1,
});

const checkFactorialSimple = (number) => {
    if(number < 0) return    

    return Array.from({length: number}, (_, i)=> i + 1).reduce((prev, curr, index) => {
        return prev * curr
    }, 1)
    
    // return Array.from({length: number}).reduce((prev, curr, index) => {
    //     return (index + 1) * prev
    // }, 1)
}

const resultSimple = checkFactorialSimple(3)

console.log({
    resultSimple
});
