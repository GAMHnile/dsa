let calculationsMem = 0;
let calculations = 0;

function fibonacci(n) {
  if (n < 2) {
    return 1;
  }
  calculations++;
  return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacciMemoized() {
  const cache = {};

  return function fibonacci(n) {
    if (n in cache) {
      return cache[n];
    }
    if (n < 2) {
      return 1;
    }
    calculationsMem++;
    cache[n] = fibonacci(n - 2) + fibonacci(n - 1);
    return cache[n];
  };
}
const fibMem = fibonacciMemoized();

// console.log("res", fibonacci(40));
// console.log("calc", calculations);

console.log("mem res", fibMem(100));
console.log("mem calc", calculationsMem);
