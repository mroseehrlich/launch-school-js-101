let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(produce) {
  let fruit = {};
  let produceKeys = Object.keys(produce);

  for (let idx = 0; idx < produceKeys.length; idx += 1) {
    let currentKey = produceKeys[idx];
    let currentValue = produce[currentKey];

    if (currentValue === 'Fruit') {
      fruit[currentKey] = currentValue;
    }
  }
  return fruit;
}

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }