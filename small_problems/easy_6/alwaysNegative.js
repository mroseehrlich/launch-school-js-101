const negative = number => {
  return number < 0 ? number : number * -1;
};

console.log(negative(5));
console.log(negative(-3));
console.log(negative(0));