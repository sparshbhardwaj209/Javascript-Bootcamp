/**
 * Given the side length of a triangle in the form of 3 integers. check if the given triangle is equilateral or scalene or isosceles.
 *
 * Note:- Given input will always give us a valid triangle
 *
 * Eg: a=7, b=7, c=7
 *      ans=> Equilateral
 *
 *      a=8, b =12, c=5
 *      ans=> scalene
 *
 *      a=8, b=14, c=8
 *      ans=> Isosceles
 *
 *
 * For Equilateral Triangle -> all the sides are equal to each other
 *
 * For Scalene Triangle -> none of the side are equal to each other
 *
 * For Isosceles Triangle -> Only 2 sides are equal to each other but the 3rd one is different.
 */

// 1 method:
let a = 8,
  b = 14,
  c = 8;
if (a == b && b == c && a == c) {
  console.log("Equilateral");
} else if (a != b && b != c && c != a) {
  console.log("Scalene");
} else {
  console.log("Isosceles");
}

// 2 method
if (a == b && (b == c) & (a == c)) {
  console.log("Equialateral");
} else if (a == b || b == c || a == c) {
  console.log("Isosceles");
} else {
  console.log("Scalene");
}
