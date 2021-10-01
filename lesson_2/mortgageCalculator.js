const readline = require("readline-sync");

// SET prompt for input
function prompt(message) {
  return console.log(`=> ${message}`);
}

// SET function to calculate monthlyPayment
function calculateMonthlyPayment(amount, interest = 0, duration) {
  let payment = (amount * (interest /
    (1 - Math.pow((1 + interest), (-duration))))).toFixed(2);

  return `$${payment}`;
}

// SET function to validate numbers input
function invalidNumber(num) {
  return num.trim() === "" ||
    Number(num) < 0 ||
    Number.isNaN(Number(num));
}

prompt("Welcome to Loan Calculator!\n");

while (true) {
  // SET loan amount from input
  prompt(`How much is your total loan?`);
  let loanAmount = readline.question();

  while (invalidNumber(loanAmount)) {
    prompt("Please enter a valid number amount for your loan");
    loanAmount = readline.question();
  }

  // SET APR from input
  prompt(`How much is your total annual percentage rate?`);
  prompt('Please enter the amount as a full number.');
  prompt('Ex: 5 for 5% or 12.5 for 12.5%');
  let interest = readline.question();

  while (invalidNumber(interest)) {
    prompt('Please enter a valid number.');
    interest = readline.question();
  }

  // SET loan duration from input
  prompt(`How long is your loan duration in months?`);
  let duration = readline.question();

  while (invalidNumber(duration)) {
    prompt('Please enter a valid number of months.');
    duration = readline.question();
  }

  // Calculate monthly interest rate
  let interestPercentage = Number(interest) / 100;
  let monthlyInterest = interestPercentage / 12;

  // Calculate monthly payment
  let payment = calculateMonthlyPayment(
    loanAmount, monthlyInterest, duration);

  // PRINT payment as dollars and cents
  prompt(`Your monthly payment is ${payment}`);
  // Prompt input for another calculation
  prompt("Would you like to try another calculation?");
  prompt('Enter "y" for yes or "n" for no.');
  let calcAgain = readline.question().toLowerCase();

  while (calcAgain[0] !== 'y' && calcAgain[0] !== 'n') {
    prompt('Please enter "y" or "n".');
    calcAgain = readline.question().toLowerCase();
  }

  if (calcAgain[0] === 'n') break;
}