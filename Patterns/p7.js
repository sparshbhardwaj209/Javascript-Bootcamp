/**
 * Ques:
 *
 *      Eg: n = 3;
 *
 *          * _ _ _ _ _ *
 *          * * _ _ _ * *
 *          * * * _ * * *
 *          * * * * * * *
 *          * * * _ * * *
 *          * * _ _ _ * *
 *          * _ _ _ _ _ *
 *
 *
 *          Divide this pattern into 3 components
 *          1) Upper
 *          2) Middle
 *          3) Lower
 *
 *
 *          //1) Logic for Upper Component
 *
 *          rows: (n -1)/2
 *          stars: Equal to Row before and after space
 *                  left stars: rowNo
 *                  right stars: rowNo
 *          spaces: n - 2 * row
 *
 *
 *              for(let row = 1; row<= (n-1)/2; row++){
 *                  let str = "";
 *
 *                  leftStars = row
 *                  for(let i = 1; i<= leftStars; i++){
 *                        str += "*";
 *                  }
 *
 *                  spaces = n - 2 * row;
 *                  for (let j = 1; j<= spaces; j++){
 *                      str += " ";
 *                  }
 *
 *                  rightStars = row;
 *                  for(let k = 1; j<=rightStars; k++){
 *                      str += "*";
 *                  }
 *
 *                  console.log(str);
 *
 *              }
 *
 *
 *          //2) Logic for Middle Component
 *              Middle component always consits of one line with n stars
 *
 *              function middle(n){
 *                  let str = "";
 *                  for(let i =1; i<= n; i++){
 *                      str += "*";
 *                  }
 *                  console.log(str);
 *              }
 *
 *          //3) Logic for Lower Component
 *               rows = (n-1)/2
 *               stars: Equal to Row before and after space
 *                      leftStars = (n-1)/2 - row + 1
 *                      rightStars = (n-1)/2 - row + 1
 *
 */

function upper(n) {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let str = "";
    let leftStars = row;
    for (let i = 1; i <= leftStars; i++) {
      str += "*";
    }
    let spaces = n - 2 * row;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let rightStars = row;
    for (let k = 1; k <= rightStars; k++) {
      str += "*";
    }
    console.log(str);
  }
}

function middle(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str += "*";
  }
  console.log(str);
}

function lower(n) {
  for (let row = 1; row <= (n - 1) / 2; row++) {
    let str = "";
    let leftStars = (n - 1) / 2 - row + 1;
    for (let i = 1; i <= leftStars; i++) {
      str += "*";
    }
    let spaces = 2 * row - 1;
    for (let j = 1; j <= spaces; j++) {
      str += " ";
    }
    let rightStars = (n - 1) / 2 - row + 1;
    for (let k = 1; k <= rightStars; k++) {
      str += "*";
    }
    console.log(str);
  }
}

function print(n) {
  upper(n);
  middle(n);
  lower(n);
}

print(5);
print(7);