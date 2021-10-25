let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = numbers.slice().reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(reversedNumbers);

numbers = [1, 2, 3, 4, 5];
let sortedNumber = [...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]
console.log(sortedNumber);

// Bonus
let reversedArray = [];
numbers.forEach(number => reversedArray.unshift(number));
console.log(numbers);
console.log(reversedArray);