const buyFruit = groceries => {
  let fruits = [];

  groceries.forEach(([fruit, count]) => {
    for (let repeat = 1; repeat <= count; repeat += 1) {
      fruits.push(fruit);
    }
  });

  return fruits;
};

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]