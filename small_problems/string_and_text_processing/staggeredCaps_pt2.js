// const staggeredCase = string => {
//   let uppercase = true;
//   let staggeredString = '';
//   for (let idx = 0; idx < string.length; idx += 1) {
//     if (/[a-z]/gi.test(string[idx])) {
//       if (uppercase) {
//         staggeredString += string[idx].toUpperCase();
//       } else {
//         staggeredString += string[idx].toLowerCase();
//       }
//       uppercase = !uppercase;
//     } else {
//       staggeredString += string[idx];
//     }
//   }
//
//   return staggeredString;
// };

const staggeredCase = string => {
  let uppercase = true;

  return [...string].map(char => {
    if (/[a-z]/gi.test(char)) {
      if (uppercase) {
        uppercase = false;
        return char.toUpperCase();
      } else {
        uppercase = true;
        return char.toLowerCase();
      }
    } else {
      return char;
    }
  }).join('');
};

console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);

