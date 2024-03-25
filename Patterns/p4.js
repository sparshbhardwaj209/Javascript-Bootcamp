/***
 * Ques:-   Eg: n = 5
 *                    *
 *                  * * *
 *                * * * * *
 *              * * * * * * *
 *            * * * * * * * * *
 *
 *
 *          Row     Stars       Spaces
 *           1       1             4
 *           2       3             3
 *           3       5             2
 *           4       7             1
 *           5       9             0
 *                 2x - 1
 */

function print(n) {
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

print(5);
print(8);
