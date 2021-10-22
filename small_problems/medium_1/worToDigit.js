const WORD_DIGITS = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9
};

const wordToDigit = string => {
  return string.split(' ').map((word) => {
    let cleanWord = word.replace(/[^a-z]/gi, '');
    if (WORD_DIGITS[cleanWord]) {
      return word.replace(cleanWord, WORD_DIGITS[cleanWord]);
    } else {
      return word;
    }
  }).join(' ');
};

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."