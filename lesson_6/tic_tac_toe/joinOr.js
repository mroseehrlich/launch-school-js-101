/* PEDAC
  inputs:
    - an array that contains a list of values
    - a delimiter (default is comma with a space after)
    - a joining word (default is "or")

    outputs:
    - a string

  algorithm:
  - if an array is empty return an empty string
  - if an array has one value, return that value
  - if an array has two values, return the two values with the word "or" between
  - if the array has three or more values, return
    a string with the first values separated with the delimiter
    and the last value joined with the joining word
*/

function joinOr(array, delimiter = ", ", joinWord = "or") {
  let string = '';
  if (!array.length) {
    return string;
  } else if (array.length === 1) {
    string = array[0];
  } else if (array.length === 2) {
    string = array.join(` ${joinWord} `);
  } else {
    array.forEach((elem, index) => {
      if (index !== array.length - 1) {
        string += `${elem}${delimiter}`;
      } else {
        string += `${joinWord} ${elem}`;
      }
    });
  }

  return string;
}

console.log(joinOr([1, 2, 3]));               // => "1, 2, or 3"
console.log(joinOr([1, 2, 3], '; '));         // => "1; 2; or 3"
console.log(joinOr([1, 2, 3], ', ', 'and'));  // => "1, 2, and 3"
console.log(joinOr([]));                      // => ""
console.log(joinOr([5]));                     // => "5"
console.log(joinOr([1, 2]));                  // => "1 or 2"

module.exports = joinOr;