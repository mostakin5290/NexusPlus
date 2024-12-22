// Comparison Operators: Used to compare values

// Number to Number Comparison
let a1 = 1;
let a2 = 2;
console.log(a1 == a2);  // false, because 1 is not equal to 2

// Comparison Operators:
// ==  : Equal to (checks value)
// !=  : Not equal to
// <   : Less than
// >   : Greater than
// <=  : Less than or equal to
// >=  : Greater than or equal to

// Comparing a number with a string
let num = 10;
let str = "20";
console.log(num == str);  // true, because JavaScript performs type conversion (string to number)


let str1 = "10";
console.log(a1 == str1);  // true, because the values are the same (type conversion)


// === : Strict equality (checks both value and type)
console.log(a1 === str1);  // false, because one is number and the other is string


console.log(a1 === a2);  // false, because the values are different

// null and undefined comparison
console.log(null == undefined);  // true, because null and undefined are loosely equal
console.log(null === undefined);  // false, because they are different types

// Comparing null with numbers
console.log(null == 0);  // false, because null is not equal to 0
console.log(null < 0);   // false, because null is not less than 0
console.log(null > 0);   // false, because null is not greater than 0
console.log(null <= 0);  // true, because null is considered less than or equal to 0
console.log(null >= 0);  // true, because null is considered greater than or equal to 0

// Undefined comparison with numbers
console.log(undefined == 0);  // false, because undefined is not equal to 0
console.log(undefined < 0);   // false, because undefined is not less than 0
console.log(undefined > 0);   // false, because undefined is not greater than 0
console.log(undefined <= 0);  // false, because undefined is not less than or equal to 0
console.log(undefined >= 0);  // false, because undefined is not greater than or equal to 0

// NaN is not equal to NaN (Not-a-Number)
console.log(NaN == NaN);  // false, because NaN is not equal to anything, even itself

// Type conversion example with strings
let str3 = "rohit"; 
let str4 = "moahan"; 
console.log(Number(str3));  // NaN, because "rohit" cannot be converted to a number

// Comparing mixed types
let abc1 = 123;
let abc2 = "123";
let abc3 = 123;
console.log(abc1 == abc2);  // true, because string "123" is converted to number 123
console.log(abc1 == abc3);  // true, because both are 123

// Inequality comparison
console.log(undefined != null);  // false, because undefined and null are loosely equal

// Logical Operators
let age = 18;
let money = 420;
console.log(age < 18 && money > 200);  // false, because age is not less than 18

console.log(age > 10 || money > 200);  // true, because the second condition (money > 200) is true

console.log(!(age > 10));  // false, because !(true) is false

// Bitwise Operators
// Bitwise AND (&), OR (|), XOR (^), NOT (~), Left shift (<<), Right shift (>>)

console.log(4 & 5);  // Bitwise AND: 0100 & 0101 = 0100 (4)
console.log(11 & 14);  // Bitwise AND: 1011 & 1110 = 1010 (10)
console.log(11 | 14);  // Bitwise OR: 1011 | 1110 = 1111 (15)
console.log(5 ^ 7);  // Bitwise XOR: 0101 ^ 0111 = 0010 (2)

console.log(5 << 3);  // Left shift: 5 * 2^3 = 40 (shift left by 3 positions)
                    // 0101 (5) << 3 -> 101000 (40)
                    
console.log(20 >> 2);  // Right shift: 20 / 2^2 = 5 (shift right by 2 positions)
                    // 10100 (20) >> 2 -> 101 (5)


                    
/*                    
Key Points:

Comparison Operators:

• == checks for equality by comparing values, with type conversion.
• === checks both the value and the type (strict comparison).
• null and undefined are loosely equal (null == undefined is true), but not strictly equal (null === undefined is false).
• NaN is not equal to NaN, so comparing NaN == NaN will return false.

Logical Operators:-
• && (AND), || (OR), and ! (NOT) are used for logical comparisons.
• && returns true if both conditions are true, || returns true if at least one condition is true, and ! negates the condition.


Bitwise Operators:

• Bitwise operations perform operations at the bit level.
• & (AND) returns a 1 bit if both corresponding bits are 1.
• | (OR) returns a 1 bit if at least one of the corresponding bits is 1.
• ^ (XOR) returns a 1 bit if exactly one of the corresponding bits is 1.
• << (left shift) shifts bits to the left (equivalent to multiplying by powers of 2).
• >> (right shift) shifts bits to the right (equivalent to dividing by powers of 2).*/
