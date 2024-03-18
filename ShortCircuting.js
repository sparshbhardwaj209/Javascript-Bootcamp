/**
 *  -- What do you mean by Short Circuiting in Javascript?
 *
 *
 *  -- Whar values are Falsy in JS?
 *      Eg: null, undefined, "" -> empty string, +0, -0, NaN, false
 *
 *      -- apart from these above everything is Truthy
 *
 *
 *      -- What is Coercion?
 *         => (Type Interconversion) js automatically tries to convert one data type to another data type
 *
 */

console.log(10 && 6); // output will be 6 because the first input is true
console.log(6 && 10); // output will be 10 because the first input is true

console.log(10 || 0); // output is first value because the first value is true, so it does not check the second value

console.log(0 || -0); //In this output will be the second value because the first one is already the false so it will return the second operand