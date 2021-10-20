const leadingSubstrings = string => {
  let substrings = [];

  for (let stringLength = 1; stringLength <= string.length; stringLength += 1) {
    substrings.push(string.slice(0, stringLength));
  }

  return substrings;
};

const substrings = string => {
  let substrings = [];

  for (let idx = 0; idx < string.length; idx += 1) {
    substrings = substrings.concat(leadingSubstrings(string.slice(idx)));
  }

  return substrings;
};

// const leadingSubstrings = string => {
//   return [...string].map((char, index) => {
//     return [...string].slice(0, index + 1).reduce((subString, char) => {
//       return subString + char;
//     }, '');
//   });
// };
//
// const substrings = string => {
//   return [...string].map((char, index) => {
//     return leadingSubstrings(string.slice(index));
//   }).flat();
// };

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]