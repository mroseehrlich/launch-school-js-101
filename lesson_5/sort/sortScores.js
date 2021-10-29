let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
let sortedScores = scores.sort((a, b) => {
  let aTotal = a.reduce((sum, num) => sum + num);
  let bTotal = b.reduce((sum, num) => sum + num);

  return aTotal - bTotal;
});

console.log(sortedScores); // [ [ 1, 4, 2 ], [ 3, 6, 4 ], [ 6, 8, 9 ] ];