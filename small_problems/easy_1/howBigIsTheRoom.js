const readline = require("readline-sync");

//const SQMETERS_TO_SQFEET = 10.7639;

// PROMPT input for either feet or meters
console.log('Would you like to measure in feet or meters? Enter "meters" or "feet"');
let measurementType = readline.prompt().toLowerCase();

while (measurementType !== "feet" && measurementType !== "meters") {
  console.log('That doesn\'t look like a valid type of measurement. Please enter "feet" or "meters"');
  measurementType = readline.prompt().toLowerCase();
}

// PROMPT input for length in meters
console.log("Enter the length of the room in meters:");
let length = Number(readline.prompt());
// PROMPT input for width in meters
console.log("Enter the width of the room in meters:");
let width = Number(readline.prompt());

// CALCULATE area
//let areaInSquareMeters = length * width;
// let areaInSquareFeet = areaInSquareMeters * SQMETERS_TO_SQFEET;
let area = length * width;

// PRINT length * width in square meters and square feet
//console.log(`The area of the room is ${areaInSquareMeters} square meters
//  (${areaInSquareFeet} square feet).`);
console.log(`The area of the room is ${area.toFixed(2)} square ${measurementType}`);