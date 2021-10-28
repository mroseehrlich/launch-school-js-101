let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

let flinstonesObj = {};

flintstones.forEach((flinstone, index) => {
  flinstonesObj[flinstone] = index;
});

console.log(flinstonesObj);
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }