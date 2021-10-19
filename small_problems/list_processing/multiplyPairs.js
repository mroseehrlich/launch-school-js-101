const multiplyAllPairs = (list1, list2) => {
  let products = [];
  list1.forEach(num1 => {
    list2.forEach(num2 => products.push(num1 * num2));
  });

  return products.sort((a, b) => a - b);
};

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]