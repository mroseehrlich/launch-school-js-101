let nanArray = [NaN];

console.log(nanArray[0] === NaN); 

// line 3 logs false because NaN !== NaN;
// Bonus
console.log(Number.isNaN(nanArray[0]));