// create a program to generate problems for students that creates like this
// x + y = value
// e.g 1. 4+6= 10
// 2. 2+5= 10
// 3. 3+6= 10
// you have to create 5 multiple choice queries and students have to choose right one

function getString(object, maxNumber) {
  let str = "";

  object.forEach((item, i) => {
    str += `${i + 1}) ${item.firstNumber} + ${
      item.secondNumber
    } = ${maxNumber} ${item.correct ? "✅" : ""} \n`;
  });
  return str;
}

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateMultipleChoices = (maxNumber, choicesCount) => {
  console.log(maxNumber);
  //first have to check number
  if (!maxNumber && typeof maxNumber !== "number") {
    return console.log("nothing there");
  }

  const choices = [];
  let isChoicesCompleted = false;
  while (!isChoicesCompleted) {
    // console.log(i);
    const firstNumber = generateRandomNumber(0, maxNumber);
    const secondNumber = generateRandomNumber(0, maxNumber - firstNumber);

    if (firstNumber + secondNumber !== maxNumber) {
      choices.push({ firstNumber, secondNumber });
    }

    if (
      !choices.some((choice) => {
        return choice.firstNumber + choice.secondNumber === maxNumber;
      })
    ) {
      choices.push({
        firstNumber,
        secondNumber: maxNumber - firstNumber,
        correct: true,
      });
    }

    isChoicesCompleted = choices.length === choicesCount;
  }
  return choices;
};

//let's check it

let choicesCount = 5;
let maxNumber = 10;
const result = generateMultipleChoices(maxNumber, choicesCount);
const string = getString(result, maxNumber);
const data = { result, string };
console.log(data.result, data.string);

console.log("--------------------------------------------------------------");

// 2nd Approach

// Function to generate a random integer between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate a single problem
function generateProblem() {
  const x = getRandomInt(1, 10);
  const y = getRandomInt(1, 10);
  const value = x + y;

  // Generate 3 incorrect options
  const options = new Set();
  while (options.size < 3) {
    const incorrectOption = getRandomInt(value - 10, value + 10);
    if (incorrectOption !== value && incorrectOption > 0) {
      options.add(incorrectOption);
    }
  }

  // Add the correct answer and shuffle
  const correctAnswer = value;
  options.add(correctAnswer);
  const shuffledOptions = Array.from(options).sort(() => Math.random() - 0.5);

  return {
    question: `${x} + ${y} = ?`,
    options: shuffledOptions,
    correctAnswer,
  };
}

// Generate 5 multiple-choice questions
function generateQuiz() {
  const quiz = [];
  for (let i = 1; i <= 5; i++) {
    const problem = generateProblem();
    quiz.push(problem);
  }
  return quiz;
}

// Display the quiz
function displayQuiz(quiz) {
  quiz.forEach((problem, index) => {
    console.log(`${index + 1}. ${problem.question}`);
    problem.options.forEach((option, i) => {
      console.log(`   ${String.fromCharCode(65 + i)}. ${option}`);
    });
    console.log(`Answer: ${problem.correctAnswer}`); // Debug purpose
    console.log("\n");
  });
}

// Generate and display the quiz
const quiz = generateQuiz();
displayQuiz(quiz);
