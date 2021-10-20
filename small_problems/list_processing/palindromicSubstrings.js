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

const isPalindrome = (string) => {
  return string.length > 1 && string === [...string].reverse().join('');
};

const palindromes = string => {
  return substrings(string).filter(substring => isPalindrome(substring));
};

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]