const fibonacci = number => {
  let a = 1;
  let b = 1;

  for (let count = 3; count <= number; count++) {
    let current = a;
    a = b;
    b = current + b;
  }

  return b;
};

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050