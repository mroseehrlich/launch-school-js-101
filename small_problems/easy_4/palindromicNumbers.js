const isPalindromicNumber = number => String(parseInt(number, 10)) === [...String(parseInt(number, 10))].reverse().join('');


console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
// console.log(isPalindromicNumber(0012300));   false
// console.log(isPalindromicNumber(00123));     false

