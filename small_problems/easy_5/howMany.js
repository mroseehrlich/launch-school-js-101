const logOccurrences = (occurrences) => {
  for (let key in occurrences) {
    console.log(`${key} => ${occurrences[key]}`);
  }
};

const countOccurrences = (array) => {
  let count = {};

  array.forEach(value => {
    if (!count[value]) count[value] = 0;

    count[value] += 1;
  });

  logOccurrences(count);
};


let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2