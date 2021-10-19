const isBalanced = string => {
  let punctuation = { parentheses: 0, doubleQuotes: 0, singleQuotes:0 };

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === "(") {
      punctuation.parentheses += 1;
    } else if (string[idx] === ")") {
      punctuation.parentheses -= 1;
    } else if (string[idx] === "'") {
      punctuation.singleQuotes += 1;
    } else if (string[idx] === '"') {
      punctuation.doubleQuotes += 1;
    }

    if (punctuation.parentheses < 0 ) return false;
  }
  return punctuation.parentheses === 0 &&
    punctuation.singleQuotes % 2 === 0 && punctuation.doubleQuotes % 2 === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
