const readline = require("readline-sync");

/*
** GET bill input
** GET tip percentage input
** @param bill, tip
** @return tip
** PRINT tip and total
*/

let bill = parseFloat(readline.question("What is the bill?\n"));
let tipPercentage = parseFloat(readline.question("What is the tip percentage?\n"));

let tip = bill * (tipPercentage / 100);
let total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}. \nThe total is $${total.toFixed(2)} `);
