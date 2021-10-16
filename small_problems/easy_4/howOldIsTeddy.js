const MAX_AGE = 120;
const MIN_AGE = 20;
const randomAge = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let age = randomAge(MIN_AGE, MAX_AGE);
console.log(`Teddy is ${age} years old!`);