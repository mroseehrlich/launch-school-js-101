const centerOf = string => {
  let halfLength = Math.floor(string.length / 2);

  return string.length % 2 === 0 ? string.slice(halfLength - 1, halfLength + 1)
    : string.slice(halfLength, halfLength + 1);
};

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"