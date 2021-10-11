const isMultiple = (number, divisor) => {
  return number % divisor === 0;
};

const multisum = (target) => {
  let sum = 0;
  for (let num = 1; num <= target; num++) {
    if (isMultiple(num, 3) || isMultiple(num, 5)) {
      sum += num;
    }
  }
  return console.log(sum);
};

multisum(3);
multisum(5);
multisum(10);
multisum(1000);