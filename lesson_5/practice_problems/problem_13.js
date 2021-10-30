let arr = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

arr.sort((a, b) => {
  let sumOddA = a.filter((num) => num % 2 === 1)
    .reduce((sum, num) => sum + num);

  let sumOddB = b.filter((num) => num % 2 === 1)
    .reduce((sum, num) => sum + num);

  return sumOddA - sumOddB;
});

console.log(arr);