/***
 * Ques: Given 3 no. , a, b, c, which represent coefficient of a quadratic eqn.
 *      ax2 + bx + c
 * find the roots of the quadratic eqn
 *      2x2 + 5x + 3
 *
 * => how to solve the quad eqn
 *
 *      1) -b+underoortb2-4ac/2a
 *      2) -b-underoortb2-4ac/2a
 *
 *
 */

function solve(a, b, c) {
  // ax^2 + bx + c
  let sqrtValue = Math.sqrt(b * b - 4 * a * c);
  let root1 = (-b + sqrtValue) / (2 * a);
  let root2 = (-b - sqrtValue) / (2 * a);
  console.log(root1, root2);
}

solve(2, 5, 3);
