let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.map(subArray => {
  if (typeof subArray[0] === 'string') {
    return [...subArray].sort((a, b) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
  } else {
    return [...subArray].sort((a, b) => b - a);
  }
});

console.log(sortedArr);