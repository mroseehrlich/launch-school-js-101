const readline = require("readline-sync");

let inputArr = [];

let num1 = Number(readline.question('Enter the 1st number: '));
inputArr.push(num1);

let num2 = Number(readline.question('Enter the 2nd number: '));
inputArr.push(num2);

let num3 = Number(readline.question('Enter the 3rd number: '));
inputArr.push(num3);

let num4 = Number(readline.question('Enter the 4th number: '));
inputArr.push(num4);

let num5 = Number(readline.question('Enter the 5th number: '));
inputArr.push(num5);

let num6 = Number(readline.question('Enter the last number: '));

// check if last number is included in the array of numbers
console.log(`The number ${num6} ${inputArr.includes(num6) ? 'appears in' : 'does not appear in'} ${inputArr}.`);

// check if the array includes a number > 25
if (inputArr.some(num => num > 25)) {
  console.log('The numbers you inputted contain a number greater than 25');
} else {
  console.log('The numbers you inputted do not contain a number greater than 25');
}
