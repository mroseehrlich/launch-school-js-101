let arr = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

let sortedArr = arr.map(subArray => {
  if (typeof subArray[0] === 'string') {
    return [...subArray].sort();
  } else {
    return [...subArray].sort((a, b) => a - b);
  }
});

console.log(sortedArr);