const readline = require("readline-sync");


const removePunctuation = (string) => {
  return string.slice(0, string.length - 1);
};

let name = readline.question("What is your name? ");

if (name.includes('!')) {
  console.log(`HELLO ${removePunctuation(name.toUpperCase())}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}`);
}


