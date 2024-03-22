/**
 * Loops helps us to do the repeated things easily.
 *
 *  Different Types of Loops are:-
 *  1) While Loop
 *  2) Do while Loop
 *  3) For Loop
 *
 * // what is the difference between the while and the if?
 *  Ans-> If will only check the condition once, does'nt matter if the condition is trues or false, it will only check it once
 * whereas,
 * ->while loop checks your condition again and again till the time it becomes false.
 *
 *
 *  ---> While Loop Syntax:-
 *      while(condition){
 *          //code
 *         }
 *
 *  ---> For Loop Syntax:-
 *      for(initialization; condition; updationi){
 *          //code
 *      }
 *
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
// let ans = 0,
//   j = 0;
// while (j <= 10) {
//   ans += j;
//   j += 1;
// }
// console.log(ans);

// Ques:-> Print the numbers from 20 to 1 in decreasing order using while loop
// let i =20;
// while(i>=1){
//     console.log(i);
//     i -= 1;
// }

//Program to print number from 1 to 10 using for loops:-
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// Program to find the sum of 20 natural number:-
// let ans = 0;
// for (let i = 0; i <= 100; i++) {
//   ans += i;
// }
// console.log(ans);

//Program to print all the even numbers greater than 1 and less than 25
// 1st method
// for (let i = 1; i <= 25; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// 2nd method
for (let i = 2; i < 25; i += 2) {
  console.log(i);
}
