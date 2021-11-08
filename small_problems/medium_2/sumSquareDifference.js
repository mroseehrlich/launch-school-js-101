const sumSquareDifference = num => {
  let count = [];
  for (let counter = 1; counter <= num; counter++) {
    count.push(counter);
  }

  let sumSquare = count.reduce((sum, count) => sum + count) ** 2;
  let squareSum = count.reduce((sum, count) => sum + (count ** 2));

  return sumSquare - squareSum;
};

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150