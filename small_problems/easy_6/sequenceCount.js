const sequence = (count, start) => {
  let sequence = [];

  for (let number = 1; number <= count; number += 1) {
    sequence.push(number * start);
  }

  console.log(sequence);
};

sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []