const stringToInteger = (string) => +string;


console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true
console.log(stringToInteger("572") === 570); //logs false
