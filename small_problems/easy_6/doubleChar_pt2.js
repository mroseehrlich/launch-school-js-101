const doubleConsonants = string => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  return [...string].map(char => {
    if (!(/[a-zA-Z]/).test(char) || vowels.includes(char)) {
      return char;
    } else {
      return char + char;
    }
  }).join('');
};

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""