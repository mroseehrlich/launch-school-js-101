const getGrade = (grade1, grade2, grade3) => {
  let score = (grade1 + grade2 + grade3) / 3;

  if (score >= 90 && score <= 100) {
    return 'A';
  } else if (score >= 80 && score < 90) {
    return 'B';
  } else if (score >= 70 && score < 80) {
    return 'C';
  } else if (score >= 60 && score < 70) {
    return 'D';
  } else {
    return 'F';
  }
};

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));