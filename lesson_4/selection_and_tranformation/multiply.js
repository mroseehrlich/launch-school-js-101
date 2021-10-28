function multiply(numbers, multiplier) {
  let multipliedNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];
    multipliedNums.push(currentNumber * multiplier);
  }

  return multipliedNums;
}

let myNumbers = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers, 3));  // => [2, 4, 6, 14, 2, 6]

// not mutated
console.log(myNumbers);