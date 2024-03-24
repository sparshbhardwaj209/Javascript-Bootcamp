/**
 *
 * Numbers in javascript
 *
 *       0
 *      -0
 *      NaN
 *
 *
 * But why -0?
 * => in physics we can relate to the magnitude and the direction, and velocity, bcoz we can relate the -x direction
 *
 * why NaN and what was its use case?
 * NaN -> Not a Number
 * Eg:- If there is an array and we had a task to find the index where the particular element is present and return the index, but there is no valid possible to return then we use NaN., we can also return -1 but this is not a good approach.
 *
 *
 * Very Beautiful property of NaN:-
 *
 * -> which is the only number in javascript which is not equal to itself?
 *
 * Other Numbers are:-
 *
 * 1) Infinity
 *
 */

console.log(+0);
console.log(-0);
console.log(NaN);
console.log(Infinity);
console.log(-Infinity);
console.log(10 / null);
console.log(undefined / null);
console.log(null / undefined);

console.log(10 < Infinity);
