// const runningTotal = (numbersArray) => {
//   let newArr = [];
//
//   for (let index = 0; index < numbersArray.length; index += 1) {
//     if (index === 0) {
//       newArr.push(numbersArray[0]);
//     } else {
//       newArr.push(numbersArray[index] + newArr[index - 1]);
//     }
//   }
//
//   return newArr;
// };

const runningTotal = (numbers) => {
  let sum = 0;

  return numbers.map(num => {
    sum += num;
    return sum;
  });
};

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []