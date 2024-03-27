/**
 * Ques: Given a value n, write a code to print the first n fibonacci numbers.
 *
 * Fibonacci series :
 *      0, 1, 1, 2, 3, 5, 8, 13, 21, ......
 *
 *  Note: apart from 0 and 1 fib, if we consider any fib number then the number is actually sum of the previous 2 fibonacci numbers
 */

function fib(n) {
  if (n == 0) {
    console.log(0);
    return;
  }
  if (n == 1) {
    console.log(0);
    console.log(1);
    return;
  }
  let a = 0;
  let b = 1;
  let count = 2;
  console.log(a);
  console.log(b);
  while (count <= n) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
    count++;
  }
}

fib(5);
