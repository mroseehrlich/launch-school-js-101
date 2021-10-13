const integerToString = (integer) => {
  let result = [];

  do {
    let remainder = integer % 10;
    integer = Math.floor(integer / 10);
    result.unshift(remainder);
  } while (integer > 0);

  return result.join("");
};

console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"