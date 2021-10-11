const readline = require("readline-sync");

/*
** PROMPT user for int > 0
** PROMPT user to input s for sum or p for product
** If s return result === sum of integers between 1 and int
** IF p return result === product of all integers between 1 and int
** PRINT result
*/

const calculateSum = (target) => {
  let result = 0;

  for (let num = 1; num <= target; num++) {
    result += num;
  }

  return result;
};

const calculateProduct = (target) => {
  let result = 1;

  for (let num = 1; num <= target; num++) {
    result *= num;
  }

  return result;
};

let int = parseInt(readline.question("Please enter an integer greater than 0: "), 10);
let operation = readline.question('Enter "s" to compute the sum, or "p" to compute the product ').toLowerCase();

if (operation === "p") {
  console.log(`The product of the integers between 1 and ${int} is ${calculateProduct(int)}`);
} else if (operation === "s") {
  console.log(`The sum of the integers between 1 and ${int} is ${calculateSum(int)}`);
}

// Further Exploration
let numbers = readline.question("Please enter a list of integers greater than 0, separated by commas: ");
let numbersArray = numbers.split(", ").map(num => parseInt(num, 10));

const calculateProductFromArr = (arr) => {
  return arr.reduce((num, total) => total * num, 1);
};

const calculateSumFromArr = (arr) => {
  return arr.reduce((num, total) => total + num, 0);
};

if (operation === "p") {
  console.log(`The product of ${numbers} is ${calculateProductFromArr(numbersArray)}`);
} else if (operation === "s") {
  console.log(`The sum of ${numbers} is ${calculateSumFromArr(numbersArray)}`);
}
