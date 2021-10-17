const interleave = (array1, array2) => {
  let newArray = [];
  for (let idx = 0; idx < array1.length; idx += 1) {
    newArray.push(array1[idx], array2[idx]);
  }

  console.log(newArray);
};

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]