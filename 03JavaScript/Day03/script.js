// JavaScript - Non-Primitive Data Types and Type Conversion

// Non-Primitive Data Types in JavaScript:
// 1. Array
// 2. Object
// 3. Function

// Array: A list-like object used to store multiple values
let arr = [10, 20, 50, "rohit", "mohit"];
console.log(typeof arr);  // Logs 'object' as arrays are objects in JavaScript

// Object: A collection of key-value pairs
let obj = {
    user_name: "Rohit",
    account_number: 31242314213,
    balance: 420
};
console.log(obj);  // Logs the object containing user details

// Function: A block of code that can be called to execute
let fun = function () {
    console.log("Hello Coder army");
    return 10;  // Returning a number from the function
};
console.log(fun());  // Calls the function and logs the returned value (10)

// Type Conversion: Converting one data type to another

// Converting string to number
let account_balance = "100";
let num = Number(account_balance);  // Convert string to number
console.log(typeof account_balance);  // Logs 'string'
console.log(typeof num);  // Logs 'number'

// Converting boolean to number
let x = false;
console.log(Number(x));  // Logs 0 (boolean false is converted to 0)

// Handling invalid numeric conversions
let account = "100xs";
let bal = "200s";
console.log(Number(account));  // Logs NaN (Not a Number)
console.log(Number(bal));  // Logs NaN

// Converting null and undefined to numbers
let x1 = null;
console.log(Number(x1));  // Logs 0 (null is converted to 0)

let x2;  // undefined variable
console.log(Number(x2));  // Logs NaN (undefined is converted to NaN)

// Converting values to string
let ab = 20;
console.log(String(ab));  // Logs '20' (number converted to string)

let ax = false;
console.log(String(ax));  // Logs 'false' (boolean converted to string)

// Boolean conversions
let abc = " ";
console.log(Boolean(abc));  // Logs true (non-empty string is truthy)

// Simple arithmetic expression
console.log((((6 * (3 + 18)) / 6) - 9));  // Evaluates and logs the result

// Modulus operator: Returns the remainder of a division
console.log(20 % 3);  // Logs 2 (20 divided by 3 leaves a remainder of 2)

// Increment and Decrement operators
let sum = 20;
// Post-increment and pre-increment examples
let total = ++sum;  // Pre-increment: sum is incremented before assignment
console.log(total);  // Logs 21 (incremented before assigned)
console.log(sum);  // Logs 21 (sum was incremented)

// Assignment operator
let x = 20;
x += 10;  // Equivalent to x = x + 10
console.log(x);  // Logs 30

x /= 10;  // Equivalent to x = x / 10
console.log(x);  // Logs 3 (after division)

/*
Notes:
1.Arrays and Objects: These are both non-primitive types in JavaScript. Arrays are used to store multiple values, and objects are used to store key-value pairs.
2.Type Conversion: Converting between types, such as from strings to numbers or booleans to numbers, is a common practice in JavaScript. Understanding how null, undefined, and other values are converted can help avoid bugs.
3.Modulus: The % operator gives the remainder when dividing two numbers.
4.Increment and Decrement: The ++ and -- operators can be used in both pre-increment (++sum) and post-increment (sum++) forms. The pre-version increments before using the value, while the post-version increments after using the value.
5.Assignment Operators: +=, -=, *=, /=, etc., are shorthand for common operations like addition, subtraction, multiplication, and division.*/