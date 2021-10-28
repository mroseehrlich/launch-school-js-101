let statement = "The Flintstones Rock";

let countLetters = {};

statement.split('').forEach(char => {
  if (char === ' ') return;

  if (!countLetters[char]) countLetters[char] = 0;

  countLetters[char] += 1;
});

console.log(countLetters);
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }