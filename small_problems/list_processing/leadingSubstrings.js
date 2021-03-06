const leadingSubstrings = string => {
  let substrings = [];

  for (let stringLength = 1; stringLength <= string.length; stringLength += 1) {
    substrings.push(string.slice(0, stringLength));
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

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]