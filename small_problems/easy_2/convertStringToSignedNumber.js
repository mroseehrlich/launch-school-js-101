const stringToInteger = (string) => {
  let stringArray = [...string];
  let value = 0;
  stringArray.map((current) => (value = +current + (10 * value)));
  return value;
};

const stringToSignedInteger = (string) => {
  let sign;
  if (string[0] === "+" || string[0] === "-") {
    sign = string[0];
    string = string.slice(1, string.length);
  }
  return !sign || sign === "+" ? stringToInteger(string) : -(stringToInteger(string));
};

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true