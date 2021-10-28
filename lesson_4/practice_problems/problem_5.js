[1, 2, 3].every(num => {
  return num = num * 2;
});

// Each iteration:
// 2
// 4
// 6
// Final evaluation of the callback:
// true
// This occurs because num = num * 2 is truthy
