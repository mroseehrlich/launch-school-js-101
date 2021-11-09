function merge (list1, list2) {
  if (!list1.length) return [...list2];
  if (!list2.length) return [...list1];

  let merged = [];
  let copy1 = [...list1];
  let copy2 = [...list2];
  while (copy1.length > 0 && copy2.length > 0) {
    merged.push(copy1[0] > copy2[0] ? copy2.shift() : copy1.shift());
  }

  return [...merged, ...copy1];
}

console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
console.log(merge([1, 4, 5], []));             // [1, 4, 5]