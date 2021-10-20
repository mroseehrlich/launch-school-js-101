const swapCase = string => {
  return [...string].map(letter => {
    if (/[A-Z]/.test(letter)) {
      return letter.toLowerCase();
    } else if (/[a-z]/.test(letter)) {
      return letter.toUpperCase();
    } else {
      return letter;
    }
  }).join('');
};

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"