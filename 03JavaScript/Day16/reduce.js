// Reduce: Notes and Examples

// 1. Basic Example of Reduce
// Summing up all elements in an array
const arr = [10, 20, 30, 40, 50];
const result = arr.reduce((Acc, curr) => {
    Acc += curr; // Add current value to accumulator
    return Acc; // Return the updated accumulator
}, 0); // Initial value of Acc is 0

console.log(result); // Output: 150

// 2. Real-World Use Case: Counting occurrences in an array
let fruits = ["orange", "apple", "banana", "apple", "orange", "apple", "banana", "grapes"];

const add_fruits = fruits.reduce((Acc, i) => {
    // Check if the fruit exists in the accumulator object
    Acc.hasOwnProperty(i) ? Acc[i]++ : Acc[i] = 1;
    return Acc;
}, {}); // Initial value of Acc is an empty object

console.log(add_fruits); // Output: { orange: 2, apple: 3, banana: 2, grapes: 1 }
