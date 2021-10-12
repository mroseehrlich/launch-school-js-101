/*
const penultimate = (string) => {
  let stringArray = string.split(" ");
  return stringArray[stringArray.length - 2];
};

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true
*/

const middleWord = (string) => {
  let stringArray = string.split(" ");

  if (!stringArray.length) {
    return "Your string is empty!";
  } else if (stringArray.length % 2 === 0) {
    return `There is no single middle word! Your middle words are "${stringArray[(stringArray.length / 2) - 1]} ${stringArray[(stringArray.length / 2) + 1]}"`;
  } else {
    let middleIndex = (stringArray.length - 1) / 2;
    return `"${stringArray[middleIndex]}"`;
  }
};

console.log(middleWord("hello"));
console.log(middleWord("Hello darkness my dear old friend"));
console.log(middleWord("Hello darkness my old friend"));