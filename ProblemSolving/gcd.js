/**
 * Ques: Given two numbers a and b, find the greatest common divisor of a and b.
 * (greatest common divisor -> gcd -> hcf -> highest common factor).
 *
 *  Eg: a = 28;
 *      b = 24;
 *
 *  ans-> 4
 */

//method 1
// take care of the prime number, return 1 if both number are prime
function gcd(a, b) {
  let ans = 1;
  for (let i = 2; i < Math.min(a, b); i++) {
    if (a % i == 0 && b % i == 0) {
      ans = i;
    }
  }
  return ans;
}

let ans = gcd(28, 24);
console.log(ans);

// Method 2 - Euclid's Algorithm
function gcd2(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    } else {
      b = b % a;
    }
  }
  if (a == 0) return b;
  return a;
}

let ans2 = gcd2(28, 24);
console.log(ans2);
