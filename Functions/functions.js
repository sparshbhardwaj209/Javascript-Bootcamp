/**
 * what is a function?
 * => It helps to minimize the repetetion of code, and helps to execute the same code again and again
 * Function is a black Box. It recieves the input works on it and gives us the output
 *
 *  -- Two Types of function:-
 *      1) Custom Functions - (User Defined)
 *      2) Inbuild Functions
 *
 *
 *  --  If we use functions then we can store our login inside the function and doesn't matter how many times you want to use it, you will have to just call the function
 *
 *              ________
 * Input  ----- |       | -------> Output
 *              |_______|
 *
 *
 * -- Benifits of using the funcitons:-
 * 1) if there is a mistake then we need to rectify it only once.
 * 2) If we need to change the logic, we need to change it only one place.
 *
 *
 *  --- How to create the functions in Javascript:-
 *
 *      syntax -> function(input1, input2, ...){
 *                      //code
 *                      return "Sparsh";
 *                }
 *
 *
 *  Quse:-> Why we are doing return and not doing console.log()?
 *    -> It helps us to store the returned value from the functions
 *
 * Ques: What if I don't return anything from the function?
 * Ans: In js, if we don't return something manually, it will bydefault return undefined.
 *
 *
 * Ques:-> what is Console.log("");
 * Ans: console -> Object
 *      log: -> key
 *
 *      -Does it return something?
 *      -> Yes, it returns undefined
 *
 *      Eg: x = Console.log("Sparsh");
 *
 *      Eg:   Console{
 *                log: function(){...}
 *             }
 *
 *
 *
 */

// Ques: Create a function to check if the number is even or odd:-

// function isEvenOdd(num) {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// let x = 11;
// let result = isEvenOdd(x);
// if (result == true) {
//   console.log("Even");
// } else {
//   console.log("odd");
// }

// for (let i = 1; i <= 20; i++) {
//   let result = isEvenOdd(i);
//   if (result == true) {
//     console.log(i + " Even");
//   } else {
//     console.log(i + " Odd");
//   }
// }

// let x = console.log("Sparsh");
// console.log(x);

// function welcome(name) {
//   console.log("Hello", name, "Welcome to JS");
//   return 1;
// }

// let res = welcome("Sparsh");
// console.log(res);

function add(x, y) {
  // here x & y are parameters
  let c = x + y;
  return c;
}

let a = 10,
  b = 20;
let res = add(a, b); // here a & b are arguments
console.log(res);

console.log(add(9,6));
