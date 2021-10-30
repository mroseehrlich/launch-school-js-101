let arr = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

let obj = {};

arr.forEach(elem => {
  //obj[elem[0]] = elem[1];

  // Updated for clarity
  let key = elem[0];
  let value = elem[1];

  obj[key] = value;
});
console.log(obj);
// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }