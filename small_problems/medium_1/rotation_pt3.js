const rotateRightmostDigits = (number, count) => {
  let digitsArray = [...String(number)];
  let digit = digitsArray[digitsArray.length - count];

  return Number(digitsArray.filter((_, index) =>
    index !== digitsArray.length - count).concat(digit).join(''));
};

const maxRotation = (number) => {
  let numDigits = String(number).length;

  for (let count = numDigits; count > 1; count -= 1) {
    number = rotateRightmostDigits(number, count);
  }

  return number;
};

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845