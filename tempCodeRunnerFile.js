/**
 * Loops helps us to do the repeated things easily.
 *
 *
 *
 * // what is the difference between the while and the if?
 *  Ans-> If will only check the condition once, does'nt matter if the condition is trues or false, it will only check it once
 * whereas,
 * ->while loop checks your condition again and again till the time it becomes false.
 */

// Write a program to print the numbers from 1 to 10;
// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// While Loop:-
// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i += 1;
// }

// Ques-> sum of all the numbers from 1 to 10

let ans = 0;
let j =0;
while (j <= 10) {
  ans += j;
  j += 1;
}
console.log(ans);
