const integerToString = (integer) => {
  let result = [];

  do {
    let remainder = integer % 10;
    integer = Math.floor(integer / 10);
    result.unshift(remainder);
  } while (integer > 0);

  return result.join("");
};

const signedIntegerToString = (integer) => {
  let sign;
  if (integer < 0) {
    sign = "-";
    integer *= -1;
  } else if (integer > 0) {
    sign = "+";
  } else {
    sign = '';
  }
  return sign + integerToString(integer);
};

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");