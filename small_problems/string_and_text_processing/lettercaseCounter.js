const letterCaseCount = string => {
  let letterCase = {
    lowercase: 0,
    uppercase: 0,
    neither: 0,
  };

  [...string].forEach(letter => {
    if (!/[A-Za-z]/.test(letter)) {
      letterCase.neither += 1;
    } else if (letter === letter.toUpperCase()) {
      letterCase.uppercase += 1;
    } else {
      letterCase.lowercase += 1;
    }
  });

  return letterCase;
};

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }