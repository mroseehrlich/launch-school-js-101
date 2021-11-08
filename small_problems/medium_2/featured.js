const isOdd = num => {
  return num % 2 === 1;
};

const isMultipleOfSeven = num => {
  return num % 7 === 0;
};

const uniqueDigits = num => {
  let digits = [...String(num)];

  let digitCount = [];

  digits.forEach(digit => {
    digitCount[digit] = digitCount[digit] + 1 || 1;
  });

  return Object.values(digitCount).every(counter => counter === 1);
};

const isFeatured = num => {
  return isOdd(num) && isMultipleOfSeven(num) && uniqueDigits(num);
};

const featured = num => {
  const MAX_FEATURED = 9876543201;

  let nextFeatured = num + 1;
  do {
    if (isFeatured(nextFeatured)) {
      return nextFeatured;
    }
    nextFeatured += 1;
  } while (nextFeatured <= MAX_FEATURED);

  return "There is no possible number that fulfills those requirements.";
};

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."