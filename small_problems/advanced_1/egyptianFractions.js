const Fraction = require('fraction.js');

const egyptian = (rationalNum) => {
  let denominators = [];

  let num = 1;
  while (rationalNum > 0) {
    let fraction = new Fraction(1, num);
    if (rationalNum >= fraction) {
      denominators.push(num);
      rationalNum = rationalNum.sub(fraction);
    }

    num += 1;
  }

  return denominators;
};

const unegyptian = (array) => {
  return array.reduce((sum, num) => sum + new Fraction(1, num)
    , new Fraction(0));
};

console.log(egyptian(new Fraction(2, 1))); // -> [1, 2, 3, 6]
console.log(egyptian(new Fraction(137, 60))); // -> [1, 2, 3, 4, 5]
console.log(egyptian(new Fraction(3, 1))); // -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15, 230, 57960]

console.log(unegyptian(egyptian(new Fraction(1, 2)))); // logs 0.5
console.log(unegyptian(egyptian(new Fraction(3, 4)))); // logs 0.75
console.log(unegyptian(egyptian(new Fraction(39, 20)))); // logs 1.95
console.log(unegyptian(egyptian(new Fraction(127, 130)))); // logs 0.9769230769230768
console.log(unegyptian(egyptian(new Fraction(5, 7)))); // logs 0.7142857142857142
console.log(unegyptian(egyptian(new Fraction(1, 1)))); // logs 1
console.log(unegyptian(egyptian(new Fraction(2, 1)))); // logs 2
console.log(unegyptian(egyptian(new Fraction(3, 1)))); // logs 3