const crunch = (string) => {
  let stringArray = [...string];
  return stringArray.filter((currentChar, index) => {
    return currentChar !== stringArray[index - 1];
  }).join('');
};

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""