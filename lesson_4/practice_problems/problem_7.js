['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// [undefined, 'bear'];
// This happens because the if clause evaluates false in the
// first iteration so the return value is undefined. The second iteration
// if clause evaluates to true, so the element is returned.