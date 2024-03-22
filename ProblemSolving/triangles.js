// Given 3 integers value a, b ,and c . check if we can form a triangle with the sides of the triangle having length a, b and c.(Not only talking about right angle triangle)

/**
 * Eg:  a=7, b=10, c=4
 *      ans-> Yes
 *
 *      a=1, b=10, c=12
 *      ans-> No
 *
 * Logic==> if we want to create  a triangle with a, b, c sides then for each side the sum of other two sides should be greater
 *
 */

let a=7, b=10, c=4;
if (a + b > c && b + c > a && a + c > b) {
  console.log("Yes");
} else {
  console.log("No");
}
