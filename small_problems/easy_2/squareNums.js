const multiply = (num1, num2) => num1 * num2;

const square = (num) => multiply(num, num);

console.log(square(5) === 25);
console.log(square(-8) === 64);