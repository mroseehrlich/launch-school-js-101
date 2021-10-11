const multisum = (target) => {
  let sum = 0;
  for (let num = 1; num <= target; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }
  return console.log(sum);
};

multisum(3);
multisum(5);
multisum(10);
multisum(1000);