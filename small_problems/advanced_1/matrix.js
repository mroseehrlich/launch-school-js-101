const transpose = matrix => {
  let newMatrix = [];

  for (let row = 0; row < matrix.length; row++) {
    newMatrix.push([]);
  }

  for (let rowIdx = 0; rowIdx < matrix.length; rowIdx++) {
    for (let columnIdx = 0; columnIdx < matrix[rowIdx].length; columnIdx++) {
      newMatrix[rowIdx].push(matrix[columnIdx][rowIdx]);
    }
  }

  return newMatrix;
};

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

let newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]