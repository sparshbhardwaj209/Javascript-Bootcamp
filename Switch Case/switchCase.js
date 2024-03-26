/**
 * value or expression :-> whatever value or expression gets calculated, we can use that value and check for the case
 *
 *  if we use break within the switch case the moment we hit the break statement we exit out of the switch.
 * 
 * if we dont put break then whatever case we hit below that everything gets executed till we find a break
 * 
 * Default statement is not mandatory, if we dont have default and none of the case matches we don't do anything
 * 
 * Syntax:
 *      switch(value or expression){
 *          case value1;
 *              /logic
 *              break;
 *          case value2;
 *              /logic
 *              break;
 *          case value3;
 *              /logic
 *              break;
 *          default;
 *      }
 */

let name = "sparsh";
switch (name) {
  case "sarthak":
    console.log("Working at EY");
    break;
  case "sparsh":
    console.log("Working at Nowhere");
    break;
  case "pooja":
    console.log("working at home");
    break;
  default:
    console.log("Don't know the company");
}
