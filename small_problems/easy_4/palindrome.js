const isPalindrome = string => {
  let stringArr = [...string];
  let reverseStringArr = [...string].reverse();

  return stringArr.every((char, index) => {
    return char === reverseStringArr[index];
  });
};

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true