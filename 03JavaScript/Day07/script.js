let num1 = 231; 
let num2 = new Number(231);
let num3 = new Number(231);

// Comparing values using '==' operator
console.log(num1 == num2);
console.log(num2 == num3);

// Printing the 'Number' object
console.log(num2);  // Logs: [Number: 231]
console.log(typeof num2);  // Logs: object

// Working with Numbers
let num = 231.68;

// Fixed number of decimals
console.log(num.toFixed(3));  // Logs: "231.680"

// Precision (total number of significant digits)
console.log(num.toPrecision(4));  // Logs: "231.7"

// Exponential notation
console.log(num.toExponential(1));  // Logs: "2.3e+2"

// Converting to string
console.log(typeof num.toString());  // Logs: string

// Value of the number
console.log(num.valueOf());  // Logs: 231.68

// Math Methods and Constants
console.log(Math.E);  // Logs: 2.718281828459045
console.log(Math.LN10);  // Logs: 2.302585092994046
console.log(Math.PI);  // Logs: 3.141592653589793
console.log(Math.LOG10E);  // Logs: 0.4342944819032518

// floor and ceil
let n = 22.5;
console.log(Math.floor(n));  // Logs: 22
console.log(Math.ceil(n));  // Logs: 23

// Generating random numbers
console.log(Math.floor(Math.random() * 10));  // 0-9
console.log(Math.floor(Math.random() * 10) + 1);  // 1-10
console.log(Math.floor(Math.random() * 10) + 11);  // 11-20

// Random number between a given range (e.g., 40 to 50)
let min = 40, max = 50;
console.log(Math.floor(Math.random() * (max - min + 1) + min));  // 40-50

// Random number between 2 and 12
console.log(Math.floor(Math.random() * 11 + 2));  // 2-12

// Random number between 30 and 40
console.log(Math.floor(Math.random() * (40 - 30 + 1) + 30));  // 30-40

// Ludo dice roll (random number between 1 and 6)
console.log(Math.floor(Math.random() * (6 - 1 + 1) + 1));  // 1-6
