const triangle = (num) => {
  for (let index = 1; index <= num; index += 1) {
    console.log(`${' '.repeat(num - index)}${'*'.repeat(index)}`);
  }
};

triangle(5);
triangle(9);