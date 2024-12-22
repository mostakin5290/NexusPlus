// Map: Notes and Examples

// 1. What is a Map?
// A Map is a collection of key-value pairs where keys can be of any data type (number, string, object, etc.).

const map1 = new Map();
map1.set(3, 90); // Adds a key-value pair to the Map
map1.set("Rohit", 45);
map1.set(20, "Mohan");

console.log(map1); // Output: Map(3) { 3 => 90, "Rohit" => 45, 20 => "Mohan" }

// 2. Updating a Value
// If a key already exists, its value is updated.
map1.set("Rohit", 40);
console.log(map1); // Output: Map(3) { 3 => 90, "Rohit" => 40, 20 => "Mohan" }

// 3. Deleting a Key-Value Pair
map1.delete(3); // Deletes the key 3 and its value
console.log(map1); // Output: Map(2) { "Rohit" => 40, 20 => "Mohan" }

// 4. Checking if a Key Exists
console.log(map1.has("Rohit")); // Output: true
console.log(map1.has(100)); // Output: false

// 5. Getting the Size of a Map
console.log(map1.size); // Output: 2

// 6. Clearing All Entries
map1.clear(); // Removes all key-value pairs
console.log(map1); // Output: Map(0) {}

// 7. Initializing a Map with Entries
const map2 = new Map([[4, "rohit"], ["Mohan", "rohan"], [30, 9], [63, 78]]);
console.log(map2); // Output: Map(4) { 4 => "rohit", "Mohan" => "rohan", 30 => 9, 63 => 78 }

// 8. Iterating Over a Map
// Using for...of Loop
for (let [key, value] of map2) {
    console.log(key, value); // Output: Key-value pairs
}

// Using forEach Method
map2.forEach((value, key) => console.log(key, value)); // Output: Key-value pairs

// 9. Difference Between Map and Object
// - Object keys are strings or symbols, whereas Map keys can be of any data type.
// - Maps maintain the order of entries, but objects do not.
// - Maps provide built-in methods like set, get, delete, has, and clear.

// Example:
const obj = { 4: "rohit", "Mohan": "rohan" };
console.log(obj[4]); // Output: "rohit"
console.log(map2.get(4)); // Output: "rohit"

// 10. Real-World Use Case
// Tracking data with complex keys (e.g., objects as keys)
const userMap = new Map();
const user1 = { id: 1, name: "John" };
const user2 = { id: 2, name: "Jane" };

userMap.set(user1, "Admin");
userMap.set(user2, "Editor");

console.log(userMap.get(user1)); // Output: "Admin"
console.log(userMap.get(user2)); // Output: "Editor"
