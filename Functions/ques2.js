/***
 *
 * Given a number x, write a function to determine whether thenumber is prime number or not?
 *
 *  Eg: i/p: 13
 *      o/p: true
 *
 *      i/p: 54
 *      o/p: false
 *
 *
 *  -- how o check whether the number is prime or not?
 * --> primes are only divisible by the 1 and the number itself.
 *      ->> if there is atleast one more no apart from 1 and x that divides x completely then x is non-prime.
 *
 *  Eg: 12          => Non-prime
 *      1 X 12
 *      2 X 6
 *      3 X 4
 *
 * Eg:  13         => Prime
 *      1 X 13
 *      13 X 1
 *
 *  */

// let num = 11;
function prime(num) {
  let res = true;
  for (i = 2; i * i <= num; i++) {
    if (num % 2 == 0) {
      res = false;
      console.log("Non-prime");
      break;
    }
  }
  if (res == true) {
    console.log("Prime");
  }
}

prime(12);
