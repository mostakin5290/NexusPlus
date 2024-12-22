// 1. What is a Set?
// => A Set is a collection of unique values. It removes duplicates automatically.

const set = new Set([10, 20, 30, 40, 10]);
console.log(set); // Output: Set(4) { 10, 20, 30, 40 }

// 2. Adding values to a Set
set.add(2); // Adds a value to the set
console.log(set); // Output: Set(5) { 10, 20, 30, 40, 2 }

// 3. Deleting values from a Set
set.delete(10); // Deletes a value from the set
console.log(set); // Output: Set(4) { 20, 30, 40, 2 }

// 4. Checking if a value exists
console.log(set.has(20)); // Output: true
console.log(set.has(10)); // Output: false

// 5. Real-World Use Case: Unique User IDs
const user_id = new Set(["rohit_negi9", "Mohi_91", "ravi.93", "chavi_90", "sumit._90"]);
let new_user = "rohit_negi9";
console.log(user_id.has(new_user)); // Output: true

// 6. Converting a Set to an Array
let arr = [...set];
console.log(arr); // Output: [20, 30, 40, 2]

// 7. Merging Two Sets
let set1 = new Set([10, 20, 30, 40, 50]);
let set2 = new Set([10, 20, 70, 40]);
let mergedSet = new Set([...set1, ...set2]);
console.log(mergedSet); // Output: Set(6) { 10, 20, 30, 40, 50, 70 }

// 8. Finding Common Elements (Intersection)
const commonElements = new Set([...set1].filter((num) => set2.has(num)));
console.log(commonElements); // Output: Set(3) { 10, 20, 40 }

// 9. Iterating Over a Set
// Using for...of loop
for (let value of set1) {
    console.log(value); // Output: 10, 20, 30, 40, 50
}

// Using forEach method
set1.forEach((value) => console.log(value)); // Output: 10, 20, 30, 40, 50

// 10. Other Methods
// Clearing all elements from a Set
set1.clear();
console.log(set1); // Output: Set(0) {}

// Getting the size of a Set
console.log(set2.size); // Output: 4
