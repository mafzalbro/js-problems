// Calculate the sum of even numbers greater than 10 and less than 30

const evenNoSumBetween = (num1, num2) => {
  let total = 0;
  for (let index = num1 + 1; index < num2; index++) {
    if (Number.isInteger(index / 2)) {
      total += index;
    }
  }
  return { "Number 1": num1, "Number 2": num2, [`Total b/w ${num1} and ${num2}`]: total };
};

const result = evenNoSumBetween(10, 30);

console.table({
  result,
});
