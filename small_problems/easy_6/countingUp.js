const sequence = integer => {
  let sequence = [];

  for (let num = 1; num <= integer; num += 1) {
    sequence.push(num);
  }

  return sequence;
};

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]