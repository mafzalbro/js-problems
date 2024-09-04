// FizzBuzz: Write a function that prints numbers from 1 to n, but for multiples of 3 print "Fizz" instead of the number and for the multiples of 5 print "Buzz". For numbers that are multiples of both three and five print "FizzBuzz".

const FizzBuzzFunction = (end, start = 1) => {
  const sortedArray = [];
  for (let i = start; i < end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      sortedArray.push("FizzBuzz");
    } else if (i % 3 === 0) {
      sortedArray.push("Fizz");
    } else if (i % 5 === 0) {
      sortedArray.push("Buzz");
    } else {
      sortedArray.push(i);
    }
  }

  return sortedArray;
};

const result = FizzBuzzFunction(25, 1);

console.table(result);
console.log(...result);
