/***
 * Ques:
 *
 *       Eg: n = 4
 *
 *                  1
 *                1 2 1
 *              1 2 3 2 1
 *            1 2 3 4 3 2 1
 *
 *
 *  -- First trying with the left half
 *
 *          - - - 1
 *          - - 1 2
 *          - 1 2 3
 *          1 2 3 4
 *
 *      -> for every row we have a task, to print some spaces followed by number
 *
 *      -> spaces = n - row
 *      -> we have to print number upto that row number
 *
 *
 *      for(let row = 1; row <= n; row++){
 *          let str = "";
 *          let spaces = n - row;
 *
 *          //for first half
 *          for(let i = 1; i<= spaces; i++){
 *              str += " ";
 *          }
 *          let counter = 1;
 *          for(let j = 1; j<= row; j++){
 *              str += counter;
 *              counter++;
 *          }
 *
 *          //for second half
 *          let counter2 = row -1;
 *          for(let k = 1; k<=row- 1;k++){
 *              str += counter2;
 *              counter--;
 *          }
 *      }
 *
 *
 *      -- Now try for the second half
 *
 */

function pattern(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let spaces = n - row;
    for (let i = 1; i <= spaces; i++) {
      str += " ";
    }
    let counter = 1;
    for (let j = 1; j <= row; j++) {
      str += counter;
      counter++;
    }
    let counter2 = row - 1;
    for (let k = 1; k <= row - 1; k++) {
      str += counter2;
      counter2--;
    }
    console.log(str);
  }
}

pattern(4);
