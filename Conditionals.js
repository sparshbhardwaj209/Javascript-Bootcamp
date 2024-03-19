/**
 * -- what are Conditional Statements?
 *   => Using conditional statements we evaluate a condition so we can take decision and correspondingly change the actions we want to do.
 *
 *  -- if
 *      syntax -> if(){
 *               //Execute this block code if condn is true
 *                };
 *
 *  -- if-else
 *      syntax -> if(){}
 *                  else{}
 *
 *  -- if-else-if
 *      syntax -> if(){}
 *                  else if(){}
 *                  else if(){}
 *                  '''''''''''
 *                      else{} // this is not necessary
 *
 *  -- Nested if-else
 *      syntax -> if(){
 *                     if(){}else{}
 *                  }else{}
 *
 *      Note:-
 *             1) if multiple conditions are true then the block where the first true condition is written will be executed.
 *
 *             2) If can exist without the else if and else.
 *
 *             3) else cannot exist without if but can exist without else if.
 *
 *
 *
 *
 */

//if:-

// console.log("start");
// if (10 > 5) {  // this condition is true
//   console.log("yes");
// }
// if(12){
//     console.log("printing Sparsh");
// }
// console.log("end");

// if - else :-
// console.log("Welcome to the prime Video");
// let isPrimeMember = false;

// if (isPrimeMember) {
//   console.log("Enjoy the content!");
// } else {
//   console.log("Please buy the subscription to enjoy the content");
// }

// if - else if - else:-

// let isUserpremium = true;
// let isUserVIP = false;

// if (isUserpremium) {
//   console.log("Enjoy the premium content on hotstar");
// } else if (isUserVIP) {
//   console.log(
//     "Enjoy the VIP content on hotstar, for more subscribe to premium"
//   );
// } else {
//   console.log("Please purchase either VIP or premium subscription to enjoy.");
// }

//Nested If else :-
let isUserPrime = true;
let isUserDiscovery = false;
let isUserAccorn = true;

if (isUserPrime) {
  if (isUserDiscovery) {
    console.log("Enjoy both the prime and the discovery content");
  } else if (isUserAccorn) {
    console.log("Enjoy both the prime and Accorn");
  } else {
    console.log("Enjoy only the prime content");
  }
} else {
  console.log("Please buy a subscription to enjoy the content");
}
