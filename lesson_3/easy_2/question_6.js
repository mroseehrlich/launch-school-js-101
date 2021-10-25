let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

let newFlintstones = [...flintstones].flat();
let newFlinstones1 = [].concat(...flintstones);

console.log(newFlintstones);
console.log(newFlinstones1);