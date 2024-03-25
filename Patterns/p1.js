// pattern - 1:
/***
 *
 *   n = 4
 *      * * * *
 *      * * * *
 *      * * * *
 *      * * * *
 *
 *   n = 6
 *      * * * * * *
 *      * * * * * *
 *      * * * * * *
 *      * * * * * *
 *      * * * * * *
 *      * * * * * *
 *
 */

function pattern(n) {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j < n; j++) {
      str += "*";
    }
    console.log(str);
  }
}

pattern(4);
pattern(6);
pattern(10);
