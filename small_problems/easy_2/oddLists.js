const oddities = (array) => {
  let oddIndex = array.filter((value, index) => {
    if (index % 2 === 0 ) {
      return value;
    }
    return false;
  });
  return oddIndex;
};

const secondFourthSixth = (array) => {
  let elements = [];
  for (let index = 0; index < array.length; index += 1) {
    if (index === 1 || index === 3 || index === 5) {
      elements.push(array[index]);
    }
  }
  return elements;
};

console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

console.log(secondFourthSixth([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(secondFourthSixth([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(secondFourthSixth(["abc", "def"])); // logs ['abc']
console.log(secondFourthSixth([123])); // logs [123]
console.log(secondFourthSixth([])); // logs []