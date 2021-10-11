const readline = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

// GET input for length in meters
let length = Number(readline.prompt("Enter the length of the room in meters:"));
// GET input for width in meters
let width = Number(readline.prompt("Enter the width of the room in meters:"));

// PRINT length * width in square meters and square feet
let areaInSquareMeters = length * width;
let areaInSquareFeet = areaInSquareMeters * SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${areaInSquareMeters.toFixed(2)} square meters (${areaInSquareFeet.toFixed(2)} square feet)`);
