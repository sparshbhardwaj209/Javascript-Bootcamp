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
 *
 *      5) Bitwise Operators:-
 *          Bitwise operator perform the corresponding operation bit by bit on the given operand.
 *          & -> Bitwise and
 *          | -> Bitwise or
 *          ^ -> Bitwise xor
 *          ~ -> Bitwise not
 *
 *          Eg: 5 -> 101  (Binary Representation of 5)
 *              5   &   7   =>
 *                            5-> 1 0 1
 *                            7-> 1 1 1
 *                               -------
 *                                1 0 1 -> Ans 5
 *
 *           Eg: 6 && 9 => 0
 *               2 && 5 => 0
 *              15 && 6 => 6
 *               5 && 6 => 4
 *
 *
 *          Eg: 5 | 6 => 7
 *              8 | 4 => 12
 *
 *          Eg: 5 ^ 6 =>
 *
 *              7 -> 111  (Binary Representation of 7)
 *
 *
 *      6) Equality Operator:-
 *          -> there are 2 equality operator
 *
 *          1) == -> abstract equality operator
 *              -> It checks the type of both operands:
 *              - If type is same, then it calls ===
 *              - if types are not same then type conversion occurs (coercian ) and then comparison is done
 *
 *          2) === -> strict equality operator
 *              -> It checks type of both the operands:
 *               - If types are different it returns false
 *               - If types are same then value comparison happens
 * 
 *      7) Typeof Operator:
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

//Equality Operator:
console.log(1 == "1");
console.log(2  == "2");
console.log(1  == "sparsh");  // 1 == NaN 
console.log(NaN === NaN);   


//typeof operator:-
 console.log(typeof "1");
 console.log(typeof("1"));
 console.log(typeof 1);
 console.log(typeof false);
 console.log(typeof undefined);
 console.log(typeof null);
 
