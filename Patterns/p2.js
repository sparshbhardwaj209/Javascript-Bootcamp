/***
 * Ques: Given a value n(positive integer), print the following pattern on the screen.
 *
 *  Eg: n = 4
 *
 *      *
 *      * *
 *      * * *
 *      * * * *
 *
 *
 *  Eg: n = 6
 *
 *      *
 *      * *
 *      * * *
 *      * * * *
 *      * * * * *
 *      * * * * * *
 */

function print(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + "*";
    }
    console.log(str);
  }
}

print(4);
print(6);
