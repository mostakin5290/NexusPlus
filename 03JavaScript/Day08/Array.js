const arr = [23, 43, 42, "Mostakin", 45, 463];
console.log(arr);

// Length of array
console.log(`Length of the array is: ${arr.length}`);

// Add element in the end
arr.push(50);
console.log(arr);

// Remove element from the end
arr.pop();
console.log(arr);

// Add element at the beginning
arr.unshift(1);
console.log(arr);

// Remove element from the beginning
arr.shift();
console.log(arr);

// Find index of element
console.log(arr.indexOf(42));

// Check if element exists
console.log(arr.includes(1));
