// const binarySearch = (yellowPages, searchTerm) => {
//
//   let min = 0;
//   let max = yellowPages.length - 1;
//
//   while (min <= max) {
//     let mid = min + Math.floor((max - min) / 2);
//     if (searchTerm === yellowPages[mid]) {
//       return mid;
//     } else if (searchTerm < yellowPages[mid]) {
//       max = mid - 1;
//     } else {
//       min = mid + 1;
//     }
//   }
//
//   return -1;
// };

const binarySearch = (yellowPages, searchTerm) => {
  let mid = Math.ceil(yellowPages.length / 2) - 1;

  if (yellowPages[mid] === searchTerm) return mid;

  if (yellowPages[mid] < searchTerm) {
    let half = binarySearch(yellowPages.slice(mid + 1), searchTerm);
    if (half >= 0) return half + mid + 1;
  } else if (yellowPages[mid] > searchTerm) {
    return binarySearch(yellowPages.slice(0, mid), searchTerm);
  }

  return -1;
};

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
console.log(binarySearch(yellowPages, 'Pizzeria'));                   // 7
console.log(binarySearch(yellowPages, 'Apple Store'));                // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77));    // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89));    // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5));     // 1

console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter'));  // -1
console.log(binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler'));  // 6