//Factorial

// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let sum = 1;
  for (let factor = 1; factor <= number; factor++) {
    sum *= factor;
  }
  return sum;
}

// console.log("Recursive", findFactorialRecursive(3));
// console.log("Iterative", findFactorialIterative(3));

//Fibonacci sequence

// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) {
  let value;
  let beforePrev = 0;
  if (n === 0) {
    value = beforePrev;
  }
  let prev = 1;
  if (n === 1) {
    value = prev;
  }

  for (let i = 2; i <= n; i++) {
    value = beforePrev + prev;
    beforePrev = prev;
    prev = value;
  }
  return value;
}

function fibonacciRecursive(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2 && n !== 0) {
    return 1;
  }

  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// console.log("recursive ", fibonacciRecursive(12));
// console.log("iterative ", fibonacciIterative(12));

//reverse a string using recursion
function reverseString(str) {
  if (typeof str !== "string") {
    return null;
    3;
  }
  if (str.length === 1) {
    return str;
  }
  if (str.length === 2) {
    return str[1] + str[0];
  }

  return (
    str[str.length - 1] + reverseString(str.slice(1, [str.length - 1])) + str[0]
  );
}

console.log(reverseString("Hello my name is George"));
//should return: 'yretsam oyoy'
