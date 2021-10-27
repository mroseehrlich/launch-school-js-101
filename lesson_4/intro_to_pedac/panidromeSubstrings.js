// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []
/*
Questions
Will the input always be a string?

input: string
output: array of substrings
rules: Explicit requirements:
  - Palindromes are case sensitive

  Implicit requirements:
  - Return only strings that are palindromes
  - If there are no palindromes in the string, the function
    should return an empty array
  - If the string is an empty string, the function should return
    an empty array

Algorithm:
  -for each starting index from 0 through the next to last index position
    for each substring length from 2 until there are no substrings of that
    length extract the substring of the indicated length starting at the
    indicated index position end of inner loop end of outer loop
  - Inside the `isPalindrome` function, check whether the string
      value is equal to its reversed value.
*/

// Pseudocode:
// START
//
//   /* Given a string named `string` */
//
//   SET result = []
//   SET startingIndex = 0
//
//   WHILE startingIndex <= length of string - 2
//     SET numChars = 2
//     WHILE numChars <= length of string - startingIndex
//       SET substring = numChars characters from string starting at
//         index startingIndex
//       append substring to result array
//       SET numChars = numChars + 1
//
//     SET startingIndex = startingIndex + 1
//
//   RETURN result
//
// END
//  isPalindrome function
//  =====================
//    - Inside the `isPalindrome` function, check whether the string
//      value is equal to its reversed value.
//  palindromeSubstrings function
//  ============================
//    - declare a `result` variable and initialize it to an empty array
//    - create an array named `substrArray` that will contain all of the
//      substrings of the input string that are at least 2 characters long.
//    - loop through the words in the `substrArray` array.
//      - if the word is a palindrome, append it to the `result` array
//    - return the `result` array
//
// Code:
// function substrings(str) {
//   let result = [];
//   let startingIndex = 0;
//
//   while (startingIndex <= str.length - 2) {
//     let numChars = 2;
//     while (numChars <= str.length - startingIndex) {
//       let substring = str.slice(startingIndex, startingIndex + numChars);
//       result.push(substring);
//       numChars += 1;
//     }
//
//     startingIndex += 1;
//   }
//
//   return result;
// }
//
// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }
//
// function palindromeSubstrings(str) {
//   let result = [];
//   let substringsArr = substrings(str);
//
//   substringsArr.forEach(substring => {
//     if (isPalindrome(substring)) {
//       result.push(substring);
//     }
//   });
//
//   return result;
// }
//
// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"));
// ["ili"]
// console.log(palindromeSubstrings("abcddcbA"));   // ["bcddcb", "cddc", "dd"]
// console.log(palindromeSubstrings("palindrome")); // []
// console.log(palindromeSubstrings(""));