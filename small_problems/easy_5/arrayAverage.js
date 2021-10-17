const average = (integers) => {
  let average = integers.reduce((value, sum) => sum + value, 0) /
    integers.length;
  console.log(Math.floor(average));
};

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40