const isBalanced = string => {
  let parentheses = 0;
  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] === "(") {
      parentheses += 1;
    } else if (string[idx] === ")") {
      parentheses -= 1;
    }

    if (parentheses < 0 ) return false;
  }

  return parentheses === 0;
};

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
