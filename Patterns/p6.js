/***
 * Note: Here, n will be always odd
 *
 * Ques:
 *          Eg: n = 3
 *                             row   spaces   stars
 *             _ _ *            1       2       1
 *             _ * * *          2       1       3
 *             * * * * *        3       0       5
 *             _ * * *          4       1       3
 *             _ _ *            5       2       1
 *
 *          Eg: n = 5
 *
 *                  *
 *                * * *
 *              * * * * *
 *            * * * * * * *
 *          * * * * * * * * *
 *            * * * * * * *
 *              * * * * *
 *                * * *
 *                  *
 *
 *
 *            Row       Stars       Spaces
 *             1          1            4
 *             2          3            3
 *             3          5            2
 *             4          7            1
 *             5          9            0
 *             6 or 1     7            1
 *             7 or 2     5            2
 *             8 or 3     3            3
 *             9 or 4     1            4
 *
 *
 *
 *
 * for the bottom half
 *
 *          total rows = n -1;
 *          row  = x;
 *          spaces = x;
 *          stars are decreasing going downwards
 *
 *          therefore, stars  = 2*(n-x)-1
 *
 *
 */

// Method 1: doing upperhalf and lowerhalf seperately
function upperTriangle(n) {
  for (let row = 1; row <= n; row++) {
    let spaces = n - row;
    let str = "";
    for (let col = 1; col <= spaces; col++) {
      str += " ";
    }
    let stars = 2 * row - 1;
    for (let cole = 1; cole <= stars; cole++) {
      str += "*";
    }
    console.log(str);
  }
}

function lowerTriangle(n) {
  for (let row = 1; row < n; row++) {
    let spaces = row;
    let str = "";
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let stars = 2 * (n - row) - 1;
    for (let k = 1; k <= stars; k++) {
      str += "*";
    }
    console.log(str);
  }
}

function print(n) {
  upperTriangle(n);
  lowerTriangle(n);
}

print(5);
print(4);

// Method 2: Doing both upper and lower half in one go

// function print2(n) {
//   for (let i = 1; i <= 2 * n - 1; i++) {
//     let spaces = n - 1;
//     let str = "";
//     let star = "";
//     for (let j = 1; j <= n; j++) {
//         str += " ";
//         star += "*"
//     }
    
//   }
// }
