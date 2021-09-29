const readline = require("readline-sync");

const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = "en";
let CALCULATE = true;

function messages(message, lang = "en") {
  return MESSAGES[lang][message];
}

function prompt(key, output) {
  let message = messages(key, LANGUAGE);
  return output ? console.log(`=> ${message} ${output}`) : console.log(`${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

prompt("welcome");
console.log("welcome");

// Loop through calculator at least once while CALCULATE is true
do {
  // Ask the user for a the first number
  prompt("firstNumber");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("invalidNumber",);
    number1 = readline.question();
  }

  // Ask the user for the second number
  prompt("secondNumber");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("invalidNumber");
    number2 = readline.question();
  }

  // Ask the user for the operation to perform
  prompt("operation");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("invalidOperation");
    operation = readline.question();
  }

  // Perform the operation on the two numbers
  // eslint-disable no-unused-vars
  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      // eslint-disable-next-line no-unused-vars
      output = Number(number1) / Number(number2);
      break;
  }
  // Print the result to the terminal
  prompt("output", output);

  prompt("calculateAgain");
  let calcAgain = readline.question().toLowerCase();

  while (!['y', 'n'].includes(calcAgain)) {
    prompt("invalidCalculateAgain");
    calcAgain = readline.question();
  }

  CALCULATE = calcAgain === 'y';
} while (CALCULATE === true);