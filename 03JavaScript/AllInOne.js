/********* Variable ************/
// Declare the variable
let variable = 10; // Variables are used to store data. They can be declared using var, let, or const.

/* Primitive Data Types:
- Number: Represents numeric values (e.g., 10, 20.5).
- Boolean: Represents true or false values.
- String: Represents text (e.g., "Hello").
- Null: Represents an intentional absence of value.
- Undefined: Represents a variable that has been declared but not initialized.
- Symbol: Represents unique identifiers.
- BigInt: Represents large integers.*/

/* Non-Primitive Data Types:
- Array: Represents a collection of elements.
- Object: Represents key-value pairs.
- Function: Represents reusable blocks of code.*/


// ********** String *************
// Strings are used to represent and manipulate a sequence of characters.
let str = "Hello Coder Army"; // String declaration
// let str = 'Hello Coder Army';
// let str = `Hello Coder Army`;

// Changing Case
let upper = str.toUpperCase(); // Converts the string to uppercase
let lower = str.toLowerCase(); // Converts the string to lowercase

// Searching in String
let firstSearch = str.indexOf("Coder"); // Returns the index of the first occurrence of "Coder"
let lastSearch = str.lastIndexOf("Coder"); // Returns the index of the last occurrence of "Coder"
let exist = str.includes("Coder"); // Checks if "Coder" exists in the string

// Extracting Substring
let slice = str.slice(0, 5); // Extracts a substring using start and end indices
let subString = str.substring(0, 5); // Extracts a substring (does not support negative indices)

// Replacing Content
let replace = str.replace(" ", ","); // Replaces the first occurrence of a space with a comma
let replaceAll = str.replaceAll(" ", "|"); // Replaces all spaces with "|"

// Splitting String
let split = str.split(" "); // Splits the string into an array based on spaces

// Trimming
let trim = str.trim(); // Removes whitespace from both ends of the string



/********** Number **************/
// Numbers are used to represent numeric data.
let num = 231.68;

let numToString = num.toString(); // Converts number to string
let fixed = num.toFixed(3); // Rounds number to specified decimal points
let toPrecision = num.toPrecision(5); // Formats number to specified precision
let toExponential = num.toExponential(2); // Converts number to exponential notation

let parsedInt = parseInt("123.45"); // Parses an integer from a string
let parsedFloat = parseFloat("123.45"); // Parses a floating-point number from a string
let isInteger = Number.isInteger(123); // Checks if the value is an integer
let isNaN = Number.isNaN("Hello"); // Checks if the value is NaN



/********** Math ***************/
// The Math object provides mathematical constants and functions.
let pi = Math.PI; // Value of PI
let E = Math.E; // Value of Euler's number
let round = Math.round(4.7); // Rounds to the nearest integer
let log = Math.LN10; // Natural logarithm of 10
let ceil = Math.ceil(4.2); // Rounds up to the nearest integer
let floor = Math.floor(4.8); // Rounds down to the nearest integer
let abs = Math.abs(-9); // Returns the absolute value
let sqrt = Math.sqrt(64); // Returns the square root
let pow = Math.pow(2, 3); // Returns 2 raised to the power of 3 (2^3)
let max = Math.max(1, 3, 5, 7); // Returns the maximum value
let min = Math.min(1, 3, 5, 7); // Returns the minimum value
let random = Math.random(); // Generates a random number between 0 and 1

// Generate a random number between 1 and 10
let randomNum = Math.floor(Math.random() * (10 - 1 + 1) + 1);
// Formula: Math.floor(Math.random() * (max - min + 1) + min)



// ********** Array ***************
// Arrays are used to store multiple values in a single variable.
let arr = [1, 2, 3, 4, 5];

let length = arr.length; // Length of the array
let firstElem = arr[0]; // Access the first element
let lastElem = arr[arr.length - 1]; // Access the last element

arr.push(6); // Adds an element to the end
arr.pop(); // Removes the last element
arr.unshift(0); // Adds an element to the start
arr.shift(); // Removes the first element

let slicedArr = arr.slice(1, 3); // Extracts a subarray without modifying the original array
let splicedArr = arr.splice(2, 1, 99); // Removes/replaces elements in the array
let joinedArr = arr.join("-"); // Joins array elements into a string

let sortedArr = arr.sort((a, b) => a - b); // Sorts the array in ascending order
let filteredArr = arr.filter((num) => num > 2); // Filters elements based on a condition
let mappedArr = arr.map((num) => num * 2); // Transforms each element in the array



// ********** Date ***************
// The Date object is used to work with dates and times.
let now = new Date(); // Current date and time
let specificDate = new Date("2023-12-19"); // Specific date
let year = now.getFullYear(); // Gets the year
let month = now.getMonth(); // Gets the month (0-11)
let day = now.getDate(); // Gets the day of the month
let hours = now.getHours(); // Gets the hours
let minutes = now.getMinutes(); // Gets the minutes
let seconds = now.getSeconds(); // Gets the seconds
let time = now.getTime(); // Gets the timestamp
now.setFullYear(2025); // Sets the year



// ********** Object ***************
// Objects are used to store data in the form of key-value pairs.
let obj = { name: "John", age: 30 };

let name = obj.name; // Accesses a property
obj.name = "Doe"; // Modifies a property
obj.gender = "Male"; // Adds a new property
let keys = Object.keys(obj); // Retrieves object keys
let values = Object.values(obj); // Retrieves object values
let entries = Object.entries(obj); // Retrieves key-value pairs

// Object.assign()
let objCopy = Object.assign({}, obj); // Creates a shallow copy of an object

// Object.freeze()
Object.freeze(obj); // Prevents modification of an object

// Object.seal()
Object.seal(obj); // Allows modification of existing properties but prevents adding or deleting properties

// Spread Operator
let newObj = { ...obj, country: "USA" }; // Creates a copy and adds new properties

/* Shallow vs. Deep Copy
    - Shallow Copy: Copies only the first level of an object.
    - Deep Copy: Recursively copies all levels of an object (e.g., using JSON.parse(JSON.stringify(obj))).*/


// Object.getOwnPropertyDescriptor()
let descriptor = Object.getOwnPropertyDescriptor(obj, "name");
/*
    Descriptor Properties:
    - value: The value associated with the property.
    - writable: Indicates if the value can be changed (true/false).
    - enumerable: Indicates if the property shows up during iteration (true/false).
    - configurable: Indicates if the property descriptor can be modified or deleted (true/false).
*/

// ********** Function ***************
// Functions are reusable blocks of code.
function greet(name) {
    return `Hello, ${name}!`;
}

let greeting = greet("Coder"); // Calls the function

// Arrow Function
const add = (a, b) => a + b; // Arrow function syntax
let sum = add(2, 3);


// ********** Conditional Statements ***************
// Conditional statements control the flow of code execution.
// if-else
let num1 = 10;
if (num1 > 5) {
    console.log("Greater than 5");
} else {
    console.log("5 or less");
}

// switch-case
let dayOfWeek = 2;
switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Other day");
}


// ********** Loops ***************
// Loops are used to execute a block of code multiple times.

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// do-while loop
do {
    console.log(count);
    count--;
} while (count > 0);

// for-of loop (for arrays)
for (let item of arr) {
    console.log(item);
}

// for-in loop (for objects)
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}

