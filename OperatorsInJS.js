/**
 *  -- What are Operands?
 *    => The values which we want to do the Operations.
 *      Eg: 10 + 3 = 13 (so 10 and 3 are the Operands)
 *
 *  -- What are Operators?
 *    => There are different types of operators like:-
 *
 *       1) Arithmetic Operators:-
 *          + -> Addition
 *          - -> Subtraction
 *          / -> Division
 *          * -> Multiplication
 *          % -> Remainder or Modulus
 *          ** -> Exponent
 *
 *      2) Assignment Operators:-
 *          =  -> assign the value on RHS to LHS
 *          += ->
 *          -= ->
 *          *= ->
 *          /= ->
 *
 *      3) Relational Operators:-
 *          <
 *          >
 *          <=
 *          >=
 *
 *      4) Logical Operators:-
 *          Two operand in AND and OR operator
 *          one operand in NOT operator
 *
 *         i) AND: &&
 *            X  |  Y  | X AND Y
 *            0  |  0  |   0
 *            0  |  1  |   0
 *            1  |  0  |   0
 *            1  |  1  |   1
 *
 *         ii) OR:  ||
 *             X  |  Y  | X OR Y
 *             0  |  0  |   0
 *             0  |  1  |   1
 *             1  |  0  |   1
 *             1  |  1  |   1
 *
 *         iii) NOT:  !
 *              X  |  Y
 *              0  |  1
 *              1  |  0
 *
 */

// Arithmetic Operators:
let x = 10;
let y = 3;
console.log(x + y); //addition
console.log(x - y); // subtraction
console.log(x * y); // multiplication
console.log(x / y); // division -> quotient
console.log(x % y); // division -> remainder
console.log(y ** 3); // Exponent

//Assignment Operators:
let a = 10;
a += 2; //short hand of -> a = a + 2
console.log(a);
a -= 2; //short hand of -> a = a - 2
console.log(a);
a *= 2; //short hand of -> a = a * 2
console.log(a);
a /= 2; //short hand of -> a = a / 2
console.log(a);
a %= 2; //short hand of -> a = a % 2
console.log(a);
a **= 2; //short hand of Exponent
console.log(a);

//Relational Operators:
// They compare the 1st operand with the 2nd Operand and returns boolean
let xa = 10;
let xaa = 10;

console.log(10 > 2);
console.log(10 < 2);
console.log(10 >= 2);
console.log(xa == xaa);
console.log(xa === xaa);

// Logical Operators:
console.log(true && false);
console.log(10 > 5 && 6 > 3);
console.log(false || true);
console.log(!(3 > 5));
