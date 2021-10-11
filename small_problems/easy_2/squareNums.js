const multiply = (num1, num2) => num1 * num2;

const square = (num) => multiply(num, num);

const power = (num, exp) => {
  if (exp === 1) {
    return multiply(num, 1);
  }

  return num * power(num, exp - 1);
};

console.log(square(5) === 25);
console.log(square(-8) === 64);

console.log(power(3, 3));