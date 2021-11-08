let memo = {};
function fibonacci(num) {
  if (num <= 2) {
    return 1;
  } else if (memo[num]) {
    return memo[num];
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}