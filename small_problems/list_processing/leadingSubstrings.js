const leadingSubstrings = string => {
  let substrings = [];

  for (let stringLength = 1; stringLength <= string.length; stringLength += 1) {
    substrings.push(string.slice(0, stringLength));
  }

  return substrings;
};

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]