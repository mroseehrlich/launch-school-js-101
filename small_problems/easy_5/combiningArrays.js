const union = (array1, array2) => {
  return [...array1, ...array2.filter(val => !array1.includes(val))];
};

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]