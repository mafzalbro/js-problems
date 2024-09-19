// Check for Prime Numbers: Write a function to check if a number is prime or not.

const isPrimeNumber = (num) => {
  let isPrime = true;

  for (let i = 2; i < num; i++) {
    if (num === i) continue;

    isPrime = num % i !== 0;

    if (!isPrime) return isPrime;
  }

  return isPrime;
};

const number = 19;
const isPrime = isPrimeNumber(number);

console.log({
  isPrime,
});

//check multiples as well
const multiples = (num) => {
  const divisbleArr = [];

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      divisbleArr.push(i);
    }
  }
  return divisbleArr;
};

const multiplesOfNum = multiples(10);

console.log({
  multiplesOfNum,
});

// a function to return array of prime numbers from start to end numbers

const primeNumbersObject = (start, end) => {
  const primesArray = [];
  const nonPrimesMultiplesObject = {};
  for (let index = start; index < end; index++) {
    isPrimeNumber(index)
      ? primesArray.push(index)
      : (nonPrimesMultiplesObject[index] = multiples(index));
  }
  return { primesArray, nonPrimesMultiplesObject };
};

const result = primeNumbersObject(0, 100);

console.log(result);
