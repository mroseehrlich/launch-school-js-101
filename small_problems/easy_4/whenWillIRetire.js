const readline = require('readline-sync');

let age = readline.question('What is your age? ');
let retirementAge = readline.question('At what age would you like to retire? ');

let currentYear = new Date().getFullYear();
let yearsToRetirement =  retirementAge - age;
let retireYear = currentYear + yearsToRetirement;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You only have ${yearsToRetirement} years of work to go!`);