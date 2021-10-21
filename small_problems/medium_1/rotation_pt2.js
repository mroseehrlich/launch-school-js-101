const rotateRightmostDigits = (number, count) => {
  let digitsArray = [...String(number)];
  let digit = digitsArray[digitsArray.length - count];

  return Number(digitsArray.filter((_, index) =>
    index !== digitsArray.length - count).concat(digit).join(''));
};

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917