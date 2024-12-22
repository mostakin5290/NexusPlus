// Declaring a variable and logging it to the console
let num = 10;
console.log(num);

// Primitive Data Types in JavaScript
// There are 7 primitive data types: Number, String, Boolean, null, undefined, Symbol, BigInt

// 1. Number: Represents both integer and floating point numbers
let acc_bal = 420;
console.log(acc_bal);  // Logs the value of acc_bal (420)

// 2. String: Represents a sequence of characters
let name = "Mostakin";
console.log(name);  // Logs the string value "Mostakin"

// 3. Boolean: Represents a true or false value
let isBool = true;
console.log(isBool);  // Logs the boolean value true
console.log(typeof isBool);  // Logs the data type of isBool (boolean)

// 4. Undefined: Represents a variable that has been declared but not assigned a value
let account;
console.log(account);  // Logs 'undefined' since account is declared but not initialized

// 5. Null: Represents an intentional absence of any object value
let bal = null;
console.log(bal);  // Logs 'null'

// 6. BigInt: Represents integers larger than the Number type can handle
let a = 736573645896239756n;  // BigInt numbers are denoted with an 'n' at the end
console.log(a);  // Logs the BigInt value 736573645896239756

// Special number constants for safe integers
console.log(Number.MAX_SAFE_INTEGER);  // Logs the largest safe integer in JavaScript
console.log(Number.MIN_SAFE_INTEGER);  // Logs the smallest safe integer in JavaScript


/*
Notes:
Data Types: JavaScript has both primitive and non-primitive data types. This code focuses on primitive types.
BigInt: BigInt is useful when working with very large integers that go beyond the safe limits of the Number type.
Logging Types: The typeof operator is useful to check the type of a variable.
Safe Integers: MAX_SAFE_INTEGER and MIN_SAFE_INTEGER are the largest and smallest integers that JavaScript can accurately represent.*/