const multiplyList = (array1, array2) => {
  let newArray = [];
  for (let idx = 0; idx < array1.length; idx += 1) {
    newArray.push(array1[idx] * array2[idx]);
  }

  console.log(newArray);
};

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]