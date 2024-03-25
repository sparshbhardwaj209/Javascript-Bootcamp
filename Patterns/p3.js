/***
 * Ques:- Given a value n (positive integer), print the folowing pattern on the screen
 *
 * Eg: n = 4
 *            *
 *          * *
 *        * * *
 *      * * * *
 */

function print(n) {
  for (let row = 1; row <= n; row++) {
    let spaces = n - row;
    let str = "";
    for (let col = 1; col <= spaces; col++) {
      str += " ";
    }
    let star = row;
    for (let cole = 1; cole <= star; cole++) {
      str += "*";
    }
    console.log(str);
  }
}

print(5);
print(8);
