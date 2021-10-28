let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

// Returns [1, 1, 1, 1, 1];

// Array.prototype.fill works by mutating all values
// in the original array to the value of the first argument, from the
// index of the second argument up to, but not including the
// index of the value of the third argument.
// Array.prototype.fill is destructive, which can be seen by running
// console.log(arr) or checking the return value in the node REPL;
