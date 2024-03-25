/***
 * Ques:-
 *
 *      Eg: n = 5
 *
 *        * * * * *
 *        * * * *
 *        * * *
 *        * *
 *        *
 *
 *
 *          Row      Stars
 *           1         5
 *           2         4
 *           3         3
 *           4         2
 *           5         1
 *                  n - row + 1
 *
 *
 */

function print(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= n - i + 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}

print(5);
