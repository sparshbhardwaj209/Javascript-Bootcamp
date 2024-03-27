/**
 * Ques: Given a number x, Calculate the sum of digits of the number x
 *
 *     Eg: 4136
 *     => 4 + 1 + 3 + 6 => 14
 */

function sumOfDigits(n) {
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    sum += rem;
    n = Math.floor(n / 10);
  }
  return sum;
}

console.log(sumOfDigits(4136));
