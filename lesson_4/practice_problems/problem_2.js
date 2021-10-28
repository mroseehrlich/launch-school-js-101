[1, 2, 3].map(num => {
  num * num;
});

// The return value is a new array containing [undefined, undefined, undefined].
// This occurs because there is no explicit return statement in the callback
// function, so the return value in each iteration is undefined.