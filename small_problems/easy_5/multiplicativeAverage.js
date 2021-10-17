const multiplicativeAverage = (array) => {
  let multiplicate = 1;
  for (let idx = 0; idx < array.length; idx += 1) {
    multiplicate *= array[idx];
  }

  let average = multiplicate / array.length;

  console.log(`${average.toFixed(3)}`);
};

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"