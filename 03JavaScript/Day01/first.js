// Basic JavaScript Code Demonstrating Variables and Console Logging

// Printing a message to the console
console.log("hello Coder Army"); // Output: hello Coder Army

// Shortcut to open the terminal in most editors: Control + `

// Different ways to declare variables: let, const, var

// 1. let: Block-scoped variable, allows reassignment
let num = 10.5; // Initializing a variable with a number
console.log(num); // Output: 10.5

let ar = "Rohit"; // Initializing a variable with a string
ar = "mohit"; // Reassigning the variable
console.log(ar); // Output: mohit

// 2. const: Block-scoped constant, values cannot be reassigned
const ids = 20; // Initializing a constant
console.log(ids); // Output: 20
// ids = 30; // This will throw an error: "TypeError: Assignment to constant variable."

// 3. var: Function-scoped (or globally scoped if not inside a function)
// It's an older way to declare variables and should generally be avoided in modern code.
var x = 10; // Initializing a variable with var
x = 20; // Reassigning the variable
console.log(x); // Output: 20

/*
NOTES:
1. Use `let` for variables that can change over time.
2. Use `const` for values that should not change.
3. Avoid using `var` unless absolutely necessary (e.g., for compatibility with older code).
4. JavaScript is dynamically typed, so you don't need to specify data types when declaring variables.
5. Prefer modern practices (`let` and `const`) for cleaner and more predictable code.
*/
