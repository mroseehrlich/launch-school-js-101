const stringToInteger = (string) => {
  let stringArray = [...string];
  let value = 0;
  stringArray.map((current) => (value = +current + (10 * value)));
  return value;
};

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("572") === 570); //logs false
